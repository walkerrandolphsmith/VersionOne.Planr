import * as actions from './../Actions';

const setCaretPosition = (state, payload) => ({
    ...state,
    caretTopPosition: payload.offset
});

const setTab = (state, payload) => ({
    ...state,
    tab: payload.tabKey
});

const selectWorkitem = (state, payload) => ({
    ...state,
    selected: payload.workitemOidToken
});

const hoverWorkitem = (state, payload) => ({
    ...state,
    hovered: payload.workitemOidToken
});

const updateWorkitemWithDetails = (state, payload) => {
    const wi = payload.workitemWithDetails;
    const workitem = state.workitems[payload.workitemWithDetails._oid];

    workitem.scope = {
        oid: wi.Scope._oid,
        name: wi['Scope.Name']
    };

    workitem.iteration = {
        oid: wi.Timebox._oid,
        name: wi['Timebox.Name']
    };

    workitem.team = {
        oid: wi.Team._oid,
        name: wi['Team.Name']
    };

    workitem.epic = {
        oid: wi.Super._oid,
        name: wi['Super.Name']
    };

    workitem.status = {
        oid: wi.Status._oid,
        name: wi['Status.Name']
    };

    workitem.changedBy = {
        oid: wi.ChangedBy._oid,
        name: wi['ChangedBy.Name']
    };

    workitem.createdBy = {
        oid: wi.CreatedBy._oid,
        name: wi['CreatedBy.Name']
    };

    workitem.priority = {
        oid: wi.Priority._oid,
        name: wi['Priority.Name']
    };

    workitem.classOfService = {
        oid: wi.ClassOfService._oid,
        name: wi['ClassOfService.Name']
    };

    workitem.blockingIssues = wi.BlockingIssues.map((blockingIssue, i) => {
        return {
            oid: blockingIssue._oid,
            name: wi['BockingIssues.Name'][i]
        }
    });

    workitem.owners = wi.Owners.map((owner, i) => {
        return {
            oid: owner._oid,
            name: wi['Owners.Name'][i],
            avatar: wi['Owners.Avatar.Content'][i]
        };
    });
    state.workitems[payload.workitemWithDetails._oid] = workitem;
    return { ...state };
};

const updateWorkitemWithConversationStream = (state, payload) => {
    const workitem = payload.workitem;
    const conversations = workitem.MentionedInExpressions.map((expression, i) => {
        const mentions = [];
        for(var j = 0; j < workitem['MentionedInExpressions.Mentions'].length; j++) {
            const mentionOidToken = workitem['MentionedInExpressions.Mentions'][i + j];
            if(mentionOidToken) {
                mentions.push({
                    oid: mentionOidToken,
                    name: workitem['MentionedInExpressions.Mentions.Name'][i + j]
                });
            }
        }

        return {
            oid: expression._oid,
            content: workitem['MentionedInExpressions.Content'][i],
            author: {
                oid: workitem['MentionedInExpressions.Author'][i]._oid,
                name: workitem['MentionedInExpressions.Author.Name'][i],
                avatar: workitem['MentionedInExpressions.Author.Avatar.Content'][i]
            },
            authorAt: workitem['MentionedInExpressions.AuthoredAt'][i],
            mentions: mentions
        }
    });
    state.workitems[payload.workitemOidToken].conversations = conversations;

    return { ...state }
};

const updateWorkitemWithActivityStream = (state, payload) => {
    state.workitems[payload.workitemOidToken].activity = payload.activity;
    return { ...state };
};

const handlers = {
    [actions.setCaretPosition]: setCaretPosition,
    [actions.setTab]: setTab,
    [actions.selectWorkitem]: selectWorkitem,
    [actions.hoverWorkitem]: hoverWorkitem,
    [actions.updateWorkitemWithDetails]: updateWorkitemWithDetails,
    [actions.updateWorkitemWithConversationStream]: updateWorkitemWithConversationStream,
    [actions.updateWorkitemWithActivityStream]: updateWorkitemWithActivityStream
};

const DEFAULT_STATE = {
    caretTopPosition: 0,
    tab: 0,
    workitems: {},
    selected: '',
    hovered: ''
};

export default (state = DEFAULT_STATE, action = {}) => {
    // Merge with items populated on server
    if(state != DEFAULT_STATE) {
        state = Object.assign({}, DEFAULT_STATE, state);
    }
    const { type, payload } = action;

    return handlers[type] ? handlers[type](state, payload) : state;
}