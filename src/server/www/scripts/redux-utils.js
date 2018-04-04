export function boundAction(actionName, ...args) {
	dispatch(this[actionName](...args));
}