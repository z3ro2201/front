import Head from 'next/head'
import Header from '../../components/blogHeader'
import Sidebar from '../../components/blogSidebar'
import Footer from '../../components/blogFooter'
const LatestPage = () => {
    return (
        <>
            <Head>
                <title>test</title>
            </Head>
            <div className="flex w-screen h-screen flex-col  bg-white">
                <Header/>
                <div className="flex w-full h-auto md:h-full justify-center">
                    <div className="flex w-full lg:w-11/12 justify-between">
                        <div className="py-2 flex w-full flex-col">
                            <h1 className="text-2xl font-extrabold">About</h1>
                            <div className="my-2 text-gray-500">
                                소개글이 없습니다.
                            </div>
                        </div>
                        <Sidebar/>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}
export default LatestPage;