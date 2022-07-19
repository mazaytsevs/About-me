import './App.scss';

function App() {
  const a = {
    name: "Maria",
    age: 24,
    lala: ["la", "bla"],
    contact: {
      instagram: "kaka",
      ba: "jsjs",
    },
  };
  return (
    <div classNameName="App">
      <div className="content">
        <div className="card">
          <div className="card__side card__side--front">
            <div className="card__cont">
              <span className="blue">alert</span>
              <span>(<span className="green">'Наведите на меня курсор'</span>)</span>
            </div>
          </div>
          <div className="card__side card__side--back">
            <div className="card__cta">
              <p><span className="purple">const</span> aboutMe <span className="cyan">= </span><span className="purple">&#123;</span>
                <br />
                <span className="space red">name</span>
                <span className="cyan">:</span> <span className="green">"Maria Zaytseva"</span>,
                <br/>
                <span className="space red">position</span>
                <span className="cyan">:</span>
                <span className="green">"frontend-developer"</span>,
                <br/>
                <span className="space red">contacts</span>
                <span className="cyan">:</span> <span className="blue">&#123;</span>
                <br/>
                <span className="double-space red">phone number</span><span className="cyan">:</span> <span className="blue">89126246550</span>,
                <br/>
                <span className="double-space red">email</span>
                <span className="cyan">:</span> <span className="green">"zaytseva.m.v@yandex.ru"</span>,
                <br/>
                <span className="double-space red">telegram</span><span className="cyan">:</span> <a href="https://t.me/mazay_tseva"><span className="green">"https://t.me/mazay_tseva"</span></a>,
                <br/>
                <span className="double-space red">github</span><span className="cyan">:</span> <a href="https://github.com/mazaytsevs"><span className="green">"https://github.com/mazaytsevs"</span></a>,
                <br/>
                <span className="space blue">&#125;</span>,
                <br/>
                <span className="space red">topSkills</span>
                <span className="cyan">: </span> 
                <span className="blue">&#91;</span>
                <span className="cyan">
                  <span className="green">"JavaScript"</span>, 
                  <span className="green">"React"</span>, 
                  <span className="green">"Redux"</span>, 
                  <br/>
                  <span className="green">"HTML"</span>, 
                  <span className="green">"CSS"</span>
                </span><span className="blue">&#93;</span>,
                <br/>
                <span className="purple">&#125;</span>;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
