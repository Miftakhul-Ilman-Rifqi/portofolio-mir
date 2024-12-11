import ExpandableCardDemo from "./ExpandableCardDemo";
import { SparklesProjects } from "./SparklesProjects";

export function Projects() {
    return (
        <div
            id="projects"
            className="flex flex-col items-center pt-5"
        >
            <div className="order-1">
                <SparklesProjects />
            </div>
            <div className="order-2">
                <ExpandableCardDemo />
            </div>
        </div>
    );
}
