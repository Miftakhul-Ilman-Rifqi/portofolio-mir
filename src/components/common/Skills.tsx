import { CardHoverEffectDemo } from "./CardHoverEffectDemo";
import { SparklesSkills } from "./SparklesSkills";

export function Skills() {
    return (
        <div
            id="skills"
            className="flex flex-col items-center text-center pt-1 scroll-mt-5"
        >
            <div className="order-1">
                <SparklesSkills />
            </div>
            <div className="order-2">
                <CardHoverEffectDemo />
            </div>
        </div>
    );
}
