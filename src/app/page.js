import GenerateJoke from "./components/generate_joke";
import GenerateFacts from "./components/generate_facts";
import DogPic from "./components/dog_pics";
export default function Home() {
  return (
    <div >
      <h1>Showcase de APIs</h1>
      <br></br>
      <GenerateJoke/>
      <GenerateFacts/> 
      <DogPic/>
    </div>
  );
}
