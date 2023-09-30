import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";

const Footer = () => {
    return ( 
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
        <Container>
            <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
                <FooterList>
                    <h3>Category</h3>
                    <Link href="/">Category 1</Link>
                    <Link href="/">Category 2</Link>
                    <Link href="/">Category 3</Link>
                    <Link href="/">Category 4</Link>
                    <Link href="/">Category 5</Link>
                    <Link href="/">Category 6</Link>
                </FooterList>
                <FooterList>
                <h3>Category</h3>
                    <Link href="/">Category 1</Link>
                    <Link href="/">Category 2</Link>
                    <Link href="/">Category 3</Link>
                    <Link href="/">Category 4</Link>
                    <Link href="/">Category 5</Link>
                    <Link href="/">Category 6</Link>
                </FooterList>
                <div>About us</div>
                <div>Follow Us</div>
            </div>
            <div>
                <p className="text-right">&copy; {new Date().getFullYear()} CosmosOrder Ltd. All rights reserved.</p>
            </div>
        </Container>
    </footer> );
}
 
export default Footer;