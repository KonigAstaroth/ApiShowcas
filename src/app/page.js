import GenerateJoke from "./components/generate_joke";
import GenerateTranslation from "./components/generate_translation";
import DogPic from "./components/dog_pics";
export default function Home() {
  return (
    <div >
      <h1>Showcase de APIs</h1>
      <br></br>
      <GenerateJoke/>
      <GenerateTranslation/> 
      <DogPic/>
    </div>
  );
}
