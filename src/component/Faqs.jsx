import '../css/faqs.css'

function Faqs(props) {
    return (
        <div>
            <div className="faqsWrapper">
                <div className="row mx-0">
                    <div className="col-lg-6 mx-auto">
                        <div className="padding">
                            <div className={"content mb-4"}>
                                <h3>COMMON QUESTIONS <span className={"ps-2"}>Last Revision: 01/09/2024</span></h3>
                                <p>
                                    Welcome to our FAQ page—a hub for quick answers to common queries. Whether you're a first-time visitor or a regular customer, find the information you need swiftly. Can't locate what you're looking for? Contact our support team for assistance. Your satisfaction is our priority.
                                </p>
                            </div>
                            <div className={"content mb-4"}>
                                <h4>Work in progress</h4>
                                <p>
                                    Currently, there are no questions displayed on this page because it’s still a work in progress. If you have inquiries or need assistance, please feel free to reach out to our support team by pressing the support button at the top of the site. We're here to help!

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faqs;

