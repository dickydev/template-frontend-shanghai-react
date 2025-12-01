import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, eaque.
        Rem nesciunt aliquam debitis reprehenderit facere, error provident!
        Accusamus laudantium molestiae obcaecati molestias saepe qui
        consequuntur suscipit, explicabo vel ad repellendus voluptatibus? Quasi,
        iste sequi obcaecati delectus est adipisci provident veniam excepturi,
        omnis ipsam natus laboriosam numquam harum ea eius aperiam id soluta
        modi, error dolores facere laborum? Tempora quo incidunt praesentium.
        Corporis nesciunt molestiae non nam rerum explicabo optio aliquid
        dolores pariatur ipsa velit, doloremque sint obcaecati ut amet molestias
        animi officia necessitatibus recusandae id tempora quisquam laboriosam!
        Corrupti quas temporibus soluta facilis similique aut distinctio
        inventore nemo nesciunt quo, voluptatem magni amet autem recusandae?
        Culpa incidunt odio neque molestias consectetur ea eum non saepe atque
        illo, cum possimus fugit quam doloribus accusantium alias provident eos.
        Eius aspernatur suscipit sit quisquam ad, dignissimos consequatur maxime
        quaerat quis rerum neque nulla facilis repellendus deleniti fuga ex qui
        officiis esse voluptates corrupti omnis quod. Provident iste nesciunt
        voluptas! Quos ab, repellendus harum aliquid aut ullam voluptate!
        Delectus quia facere odio, quod asperiores alias nisi deserunt
        reiciendis saepe pariatur voluptatibus nihil eligendi nulla! Quod labore
        accusamus quidem, harum tempore sapiente ullam. Ullam labore soluta
        magnam earum dolorem repellat repellendus ipsa, expedita eaque!
      </p>
    </>
  );
}

export default App;
