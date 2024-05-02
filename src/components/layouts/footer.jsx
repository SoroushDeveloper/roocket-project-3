import HomeButton from "../buttons/homeButton.jsx";

export default function Footer() {
    const hasToken = localStorage.getItem('token') !== null;
    const pathName = window.location.pathname;
    return (
        <>
            {pathName === '/' || !hasToken ? null : <HomeButton/>}
        </>
    )
}