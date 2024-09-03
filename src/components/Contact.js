export default function Contact() {
    const emailAddress = 'sumitjambure2000@gmail.com'; // Replace with your actual email address
    const contactNumber = '7378705528';
    return (
        <section id="contact" className="my-40 align-center max-w-5xl mx-auto p-3">
            <h2 className="text-5xl font-bold text-emerald-500 text-center">Contact</h2>

            <div className="flex gap-5 justify-center my-10">
                <Link
                    href={`mailto:${emailAddress}`} // Uses mailto syntax for email link
                    target="_blank"
                    rel="noreferrer"
                    className="text-center hover:underline"
                >
                    Gmail:
                    <span className="font-bold">{emailAddress}</span>
                </Link>

                <Link
                    href="https://github.com/sumitjambure"
                    target="_blank"
                    rel="noreferrer"
                    className="text-center hover:underline"
                >
                    Github:
                    <span className="font-bold">Sumit Jambure</span>
                </Link>

                {/* <Link
                    href="https://instagram.com/solo.sumit_"
                    target="_blank"
                    rel="noreferrer"
                    className="text-center hover:underline"
                >
                    Instagram:
                    <span className="font-bold">Sumit Jambure</span>
                </Link> */}
                <Link
                    href={`tel:${contactNumber}`} // Use `tel:` prefix for phone numbers
                    target="_blank"
                    rel="noreferrer"
                    className="text-center hover:underline"
                >
                    Phone:
                    <span className="font-bold">{contactNumber}</span>
                </Link>
            </div>
        </section>
    );
}

// Assuming a separate Link component (recommended for reusability):
function Link({ href, children, target = '_blank', rel = 'noreferrer', className = '' }) {
    return (
        <a href={href} target={target} rel={rel} className={`text-center hover:underline ${className}`}>
            {children}
        </a>
    );
}