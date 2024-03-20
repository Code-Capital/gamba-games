import '../css/linkedPlatform.css';
import steamIcon from '../assets/steamIcon.svg';
import discordIcon from '../assets/discordIcon.svg';
import twitterIcon from '../assets/twitterIcon.svg';

function LinkedPlatforms() {
    // Array of linked platforms
    const linkedPlatforms = [
        {
            platform: "Steam",
            icon: steamIcon,
            description: "Your account is linked to steam ID 76561199012447287",
            isLinked: true
        },
        {
            platform: "Discord",
            icon: discordIcon,
            description: "Your account is linked to discordapp.com/users/224586975221514240",
            isLinked: true
        },
        {
            platform: "Twitter",
            icon: twitterIcon,
            description: "Your account not linked yet - you’re missing out!",
            isLinked: false
        }
    ];

    return (
        <div>
            <div className="linkedWrapper pt-5">
                <div className="row mx-0">
                    <div className="col-lg-12">
                        <h3 className="mb-5">Linked platforms</h3>
                    </div>
                </div>
                {/* Mapping over linked platforms */}
                {linkedPlatforms.map((platform, index) => (
                    <div className="row linked rounded mb-2" key={index}>
                        <div className="col-lg-6 px-0">
                            <div className="d-flex align-items-center gap-3">
                                <div className="">
                                    <img src={platform.icon} alt={platform.platform} />
                                </div>
                                <div className="">
                                    <h5 className="mb-0">{platform.platform}</h5>
                                    <p className="mb-0">{platform.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 px-0">
                            {/* Conditionally rendering linked/unlinked button */}
                            {platform.isLinked ? (
                                <button className="btn w-100 h-100">LINKED</button>
                            ) : (
                                <button className="btn w-100 h-100 unlink">LINK ACCOUNT</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LinkedPlatforms;
