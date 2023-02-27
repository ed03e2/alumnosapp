import{authInitialState}from"./AlumnoContext";

export const authReducer = (state, action) => {
    switch(action.type){
        case 'signIn':
            return{
                ...state,
                matricula:'123456789',
                nombre:'daguito fiscal',
                tipo:'admin',
                token:'12345678993982391898219',
            };
            case 'singOut':
                return{
                    ...authInitialState
                }
            default:
                return state          
    }
}
