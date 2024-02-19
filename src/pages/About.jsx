import { data } from '../data/data';
import Hero from "../components/about/Hero";

export default function About() {
    return (
        <div>
            <Hero data={data.about.hero} />
        </div>
    )
}