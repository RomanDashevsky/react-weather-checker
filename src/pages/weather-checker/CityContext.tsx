import React, {
  ReactNode,
  useContext,
  useReducer,
} from 'react'

interface CityProviderProps {
  children: ReactNode;
}

interface City {
  city: string;
  setCity: (newKey: string) => void;
}

interface CityAction {
  type: string;
  payload: string;
}

const CityContext = React.createContext<City>({
  city: '',
  setCity: () => {}
})

const SET_CITY = 'setCity';

const reducer = (state: string, action: CityAction) => {
  switch (action.type) {
    case SET_CITY: return action.payload
    default: return state
  }
}

export const useCity = () => {
  return useContext(CityContext)
}

export const CityProvider = (props: CityProviderProps) => {
  const [city, dispatch] = useReducer(reducer, '' )

  const setCity = (newCity: string) => dispatch({ type: SET_CITY, payload: newCity })

  return (
    <CityContext.Provider value={{city, setCity}}>
      { props.children }
    </CityContext.Provider>
  )
}
