import { combineReducers, createStore } from 'redux';

const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: '',
};

const initialStateCustomer = {
    fullName: '',
    address: '',
    id: '',
    createdAt: '',
};

function customerReducer(state = initialStateCustomer, action) {
    switch (action.type) {
        case 'customer/create':
            return {
                ...state,
                fullName: action.payload.fullName,
                address: action.payload.address,
                id: action.payload.id,
                createdAt: action.payload.createdAt,
            };
            case 'customer/update':
                return {
                    ...state,
                    fullName: action.payload.fullName,
                    address: action.payload.address,
                };
        default:
            return state;
    }
}

function accountReducer(state = initialStateAccount, action) {
    switch (action.type) {
        case 'account/deposit':
            return {
                ...state,
                balance: state.balance + action.payload,
            };
        case 'account/withdraw':
            return {
                ...state,
                balance: state.balance - action.payload,
            };
        case 'account/requestLoan':
            return {
                ...state,
                loan: action.payload.amount,
                loanPurpose: action.payload.purpose,
            };
            case  'payment/loan':
                return {
                    ...state,
                    loan: 0,
                    balance: state.balance - state.loan,
                    loanPurpose: '',
                };
        default:
                return state;
    }
}


const rootReducer= combineReducers({
    a: accountReducer,
    c: customerReducer,
});

const store = createStore(rootReducer);

// store.dispatch({type: 'account/deposit', payload: 1000})
// console.log(store.getState())
// store.dispatch({type: 'account/withdraw', payload: 450})
// console.log(store.getState())
// store.dispatch({type: 'account/requestLoan', 
// payload: {amount: 1000, purpose: 'buy a car'}})
// console.log(store.getState())

function deposit(amount) {
    return {
        type: 'account/deposit',
        payload: amount,
    };
}

function withdraw(amount) {
    return {
        type: 'account/withdraw',
        payload: amount,
    };
}

function requestLoan(amount, purpose) {
    return {
        type: 'account/requestLoan',
        payload: { amount, purpose },
    };
}
function payLoan() {
    return {
        type: 'payment/loan',
    };
}

function createCustomer(fullName, address, id, createdAt) {
    return {
        type: 'customer/create',
        payload: { fullName, address, id, createdAt: new Date() },
    };
}

function updateCustomer(fullName, address) {
    return {
        type: 'customer/update',
        payload: { fullName, address },
    };
}

store.dispatch(deposit(1000));
console.log(store.getState());
store.dispatch(withdraw(450));
console.log(store.getState());
store.dispatch(requestLoan(1000, 'buy a house'));
console.log(store.getState());
store.dispatch(createCustomer('Desmond', 'Johanessburg', '1234'));
console.log(store.getState());
store.dispatch(updateCustomer('Desmond Mpofu', 'Cape Town'));
console.log(store.getState());
