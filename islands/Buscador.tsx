import { useSignal } from "@preact/signals";

export default function Buscador(){
  const name = useSignal("");

  const peliculaBuscada = () => {
    if (name.value.trim()) {
        globalThis.location.href = `/?name=${name.value}`;
    }
  };
    return(
      <div class="buscar"> 
        <form method= 'get'>
          <input 
            name = 'name' 
            type = 'text' 
            placeholder='Buscador'
            value={name.value} 
            onInput={(n) => name.value = n.currentTarget.value}
          /> 
        </form>
        <button 
          class = "botonLupa" 
          type="button"
          onClick={peliculaBuscada}
          >
          <i class="fa-sharp fa-solid fa-magnifying-glass fa-rotate-90 fa-xl" style="color: #ff0000;"></i>
        </button>
      </div>
    )
}