# to-do and note app with react native and expo

primera fase del proyecto, se implemento un menu drawer (lateral) para facilitar la navegacion entre las 
pantallas del proyecto, pronto se espera personalizar este menu y agregar una funcionalidad de cambio de tema
(DarkMode y LightMode). 


______

se agregaron algunos estilos a los items del drawer, ademas, se agregó un titulo (hoy no fue un dia muy productivo).

```lua
screenOptions={{
  drawerActiveBackgroundColor: "#FFF5D8",
  drawerActiveTintColor: "#FF9983"
}}
```



<img src="https://github.com/catzSpace/todo-app/assets/133279982/c34ff9de-e066-47e0-b58c-25233f7afe79" width="250em"/>

_______
# integracion de ScrollView

<img src="https://github.com/catzSpace/todo-app/assets/133279982/5eeff6aa-7f35-4492-9104-8139128ea009"/>


----
```lua
import { ScrollView } from "react-native-gesture-handler";

export default function Page(){
  return(
    <ScrollView >
      {// content of page}
    <ScrollView />
  )
}

```

