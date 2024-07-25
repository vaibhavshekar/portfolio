import './App.css';
import './style.css';
import Header from './components/header.jsx';
import MainSec from './components/mainsec.jsx';
import Skills from './components/skills.jsx';
import Experience from './components/experience.jsx';
import Projects from './components/projects.jsx';
import Article from './components/articles.jsx';
import Articlepage from './components/article_page.jsx';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainSec></MainSec>
      <Skills></Skills>
      <Experience></Experience>
      <Projects></Projects>
      <Article></Article>
      {/* <Articlepage></Articlepage> */}
    </div>
  );
}

export default App;
