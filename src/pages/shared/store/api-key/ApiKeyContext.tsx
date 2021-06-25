import React, {
  ReactNode,
  useContext,
  useReducer,
} from 'react'

interface ApiKeyProviderProps {
  children: ReactNode;
}

interface ApiKey {
  key: string;
  setKey: (newKey: string) => void;
}

interface ApiKeyAction {
  type: string;
  payload: string;
}

const ApiKeyContext = React.createContext<ApiKey>({
  key: '',
  setKey: () => {}
})

const SET_KEY = 'setApiKey';

const reducer = (state: string, action: ApiKeyAction) => {
  switch (action.type) {
    case SET_KEY: return action.payload
    default: return state
  }
}

export const useApiKey = () => {
  return useContext(ApiKeyContext)
}

export const ApiKeyProvider = (props: ApiKeyProviderProps) => {
  const [key, dispatch] = useReducer(reducer, '' )

  const setKey = (newKey: string) => dispatch({ type: SET_KEY, payload: newKey })

  return (
    <ApiKeyContext.Provider value={{key, setKey}}>
      { props.children }
    </ApiKeyContext.Provider>
  )
}
