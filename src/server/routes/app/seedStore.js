import configureStore from './../../../shared/store';

export const seedStore = () => {
    const store = configureStore({
        initialState: undefined,
        history: undefined
    });

    //Seed store with initial data.

    return store;
};