import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const BlogFooter = () => {
    return(
        <>
            <footer className="flex h-auto block md:hidden justify-center border-t border-solid border-slate-150">
                <div className="flex px-2 py-2 w-full md:w-11/12 md:px-0 flex-col justify-center">
                    <small className="m-auto">&copy; 2023 2ero.dev</small>
                    <ul className="flex flex-row">
                        <li>
                            <a href="//github.com/z3ro2201" className="text-lg">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                        </li>
                        <li>
                            <a href="mailto:2ero.rcv@gmail.com" className="text-lg">
                                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default BlogFooter;