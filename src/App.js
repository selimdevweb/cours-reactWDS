import './App.css';
import React ,{useState} from 'react'
import Use from './Use'
import Window from './Window'

function App() {
  /* useState toujours lui donner une valeur initial */
  /* usestate retrounera toujours 2  valeur en tableau  */
  /* la premiere valeur du tableau sera la valeur initial et la deuxieme valeur du tableau sera la valeur qui sera mise à jour 
  donc ici la velur initial donc count sera 4 et on la definit dans le span
  const [count, setCount] = useState(4)

  pour le setCount la valeur de mise à jour, on la definit selon l'action qui doit se passer, ici on la definit dans une fonction au click et en lui dit lors du click tu utilise la fonction decrementCount dans cette fonction on utilise la fonction setCount avec comme argument prevCount si il s'agit d'une opération ou la velur changée depend de la valeur précedente  =>prevCount qui dit qu'on doit utiliser la valeure pécedente
  si on le fait pas et qu'on lui passe comme argument seulement count alors ça risque de poser un cretain probleme 
  exemple setCount(count -1)
  plusieurs fois et on a toujours seulment moins 1
  
  
  
  pour eviter d'alourdir notre page useState doit être utilisé en tant que fonction car sinon elle est appélee à chaque fois donc pour y remédoer on utilise une fonction, fléchée
  const [count, setCount] = useState(()=>{
  return 4
  console.log('hello')
  })   */
  const [count, setCount] = useState(()=>{
  return 4
  })
  const [theme, setTheme] = useState(()=>{
    return 'blue'
    })
  /* si on utilise useState en tant que objet pour lui passer plusieurs valeurs à changer il ne faut pas il vaut mieux créer un autre useSatet avec d'autres valeurs et l'inculre dans les fonctions au clicks par exemple */
  function decrementCount() {
    setCount(prevCount => prevCount -1)
    setTheme('yellow')

  }
  function incrementCount() {
    setCount(prevCount => prevCount +1)
    setTheme('red')
    
  }
  return (
    <>
    <Window />
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
      <Use />
      
    </>
  );
}

export default App;
