// Bug tracker application
// In redux, reducers to be pure functions

let lastId = 0;

export default function reducer(store = [], action) {
  switch (action.type) {
    case "Add_Bug": {
      console.log("New bug is adding", action);
      return [
        ...store,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    }
    case "Resolve_Bug": {
      var bugToBeResolved = store.find((bug) => bug.id == action.payload.id);
      if (bugToBeResolved) {
        bugToBeResolved.resolved = true;
      }
      return bugToBeResolved;
    }

    case "Delete_Bug": {
      store = store.filter((bug) => bug.id !== action.payload.id);
      return store;
    }

    default:
      return store;
  }
}
