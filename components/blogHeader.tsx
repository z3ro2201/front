import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faUser } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const BlogHeader = () => {
    return(
        <>
            <header className="flex h-auto justify-center border-b border-solid border-slate-150">
                <div className="flex px-2 py-2 w-full md:w-11/12 md:px-0 flex-row justify-between">
                    <h1>
                        <Link href="/blog/latest">
                            2ero.dev
                        </Link>
                    </h1>
                    <ul className="flex flex-row items-center">
                        <li className="mr-4 hidden md:block">
                            <div className="bg-white py-2 pl-6 pr-4 relative border border-solid border-slate-150 rounded-full">
                                <input type="text" name="" id="" className="text-sm border border-transparent outline-none focus:border-transparent focus:ring-0 focus:outline-none" />
                                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                            </div>
                        </li>
                        <li className="mr-2 block md:hidden">
                            <Link href="/blog/login">
                                <span className="flex w-10 h-10 bg-slate-100 justify-center items-center border border-solid border-transparent rounded-full">
                                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog/login">
                                <span className="flex w-10 h-10 bg-slate-100 justify-center items-center border border-solid border-transparent rounded-full">
                                    <FontAwesomeIcon icon={faUser}/>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default BlogHeader;