import Link from 'next/link'
const BlogSidebar = () => {
    return(
        <>
            <aside className="py-2 px-4 w-80 hidden lg:block border-l border-solid border-slate-200">
                <div className="w-full">
                    <div className="w-full"></div>
                    <div className="w-full">
                        <span className="block font-semibold text-base">2ero</span>
                        <span className="block font-normal text-xs">
                            <p>소개말이 없습니다.</p>
                            <p>소개말이 없습니다.</p>
                            <p>소개말이 없습니다.</p>
                        </span>
                    </div>
                </div>
                <nav className="mt-5 flex flex-col">
                    <span className="block uppercase text-slate-300">CATEGORY</span>
                    <ul className="my-2 text-xs">
                        <li>메뉴가 없습니다.</li>
                        <li>메뉴가 없습니다.</li>
                        <li>메뉴가 없습니다.</li>
                        <li>메뉴가 없습니다.</li>
                        <li>메뉴가 없습니다.</li>
                    </ul>
                </nav>
                <nav className="mt-5 flex flex-col">
                    <span className="block uppercase text-slate-300">Latest post</span>
                    <ul className="my-2 text-xs">
                        <li>작성된 포스트가 없습니다.</li>
                    </ul>
                </nav>
                <nav className="mt-5 flex flex-col">
                    <span className="block uppercase text-slate-300">Link</span>
                    <ul className="my-2 text-xs">
                        <li>
                            <a href="//wsgvet.com" target="_blank">우성짱의 NAS</a>
                        </li>
                    </ul>
                </nav>
                <footer className="fixed py-2 bottom-0">
                    <ul className="flex text-xs">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/blog/about">Profile</Link>
                        </li>
                        <li>
                            <a href="//github.com/z3ro2201">Github</a>
                        </li>
                        <li>
                            <a href="mailto:2ero.rcv@gmail.com">Contact us</a>
                        </li>
                    </ul>
                    <small>&copy; 2023. 2ero.dev</small>
                </footer>
            </aside>
        </>
    );
}
export default BlogSidebar