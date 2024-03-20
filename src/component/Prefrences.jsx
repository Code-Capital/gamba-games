import '../css/prefrences.css';
function Preferences() {
    // Array of preference objects
    const preferences = [
        {
            title: "Anonymous mode",
            description: "Removes your steam link, steamID, and username. No more people asking you for skins!"
        },
        {
            title: "Private mode",
            description: "Removes your steam link and steamID"
        },
        {
            title: "Double down feature",
            description: "Removes the double down feature after a win on coinflip."
        },
        {
            title: "Reduced animations",
            description: "Removes some animations to improve performance"
        }
    ];

    return (
        <div className="preferenceWrapper py-5">
            <div className="row mx-0">
                <div className="col-lg-12">
                    <h3 className="mb-3">Preferences</h3>
                </div>
                <div className="col-lg-6">
                    {preferences.map((preference, index) => (
                        <div className="mb-2" key={index}>
                            <h5 className="mb-1">{preference.title}</h5>
                            <p className="mb-0">{preference.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Preferences;
