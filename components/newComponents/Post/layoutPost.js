// import Alert from '../components/alert'
import FooterPost from './footerPost'
import Meta from '../Home/meta'
import HeaderPost from './header'
export default function LayoutPost({ preview, children }) {
    return (
        <>
            <Meta />
            <HeaderPost/>
            <main>{children}</main>
            <FooterPost />
        </>
    )
}