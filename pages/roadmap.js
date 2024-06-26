
export default function RoadMap() {
    return (
        <>
            <div className="container mx-auto p-10">
                <p className="mb-10">This roadmap is for BGarr Photos. Find it on Github.</p>
                <div className="grid grid-cols-3 gap-10">
                    <div>
                        <h2 className="mb-2 font-bold">Happening Now</h2>
                        <ul className="list-disc">
                            <li>Add React Lightbox</li>
                            <li>Add alt tags to markdown photos</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-2 font-bold">To-Do List</h2>
                        <ul className="list-disc">
                            <li>Host Images on DigitalOcean</li>
                            <li>Implement Gallery Layout</li>
                            <li>Add mobile menu</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-2 font-bold">Future List</h2>
                        <ul className="list-disc">
                            <li>Add categories</li>
                            <li>Add tags</li>
                            <li>Pull feed from Fediverse</li>
                            <li>Strapi integration</li>
                            <li>Better SEO</li>
                            <li>Share Options</li>
                            <li>Ability to Buy Prints</li>
                            <li>Archive List</li>
                            <li>Sorting / Filtering</li>
                            <li>Internal uploads/albums that aren&apos;t public</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2 className="mb-2 font-bold">Completed List</h2>
                        <ul className="list-disc">
                            <li>Add better image quality</li>
                            <li>Create new dev branch</li>
                            <li>Designed new story / gallery view</li>
                        </ul>
                </div>
            </div>
        </>
    )
}