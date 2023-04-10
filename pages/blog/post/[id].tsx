import Head from 'next/head'
import Header from '../../../components/blogHeader'
import Sidebar from '../../../components/blogSidebar'
import Footer from '../../../components/blogFooter'
const LatestPage = () => {
    return (
        <>
            <Head>
                <title>test</title>
            </Head>
            <div className="flex w-screen h-screen flex-col  bg-white">
                <Header/>
                <div className="flex w-full h-auto flex-col md:h-full justify-center">
                    <div className="flex w-full h-full lg:w-11/12 justify-between">
                        <div className="flex w-full flex-col">
                            <div className="w-full h-40 mb-4 bg-black">test</div>
                            <div className="flex w-full justify-end">
                                <div className="w-full px-4 lg:w-11/12 lg:px-0">sss</div>
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