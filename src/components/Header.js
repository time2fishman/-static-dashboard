import UserIcon from '../imgs/icons8-user-48 (1).png'

const Header = () => {
    return (
        <header>
            <div className="header-heading">
                <h1>Current Sales</h1>
                <h3 className="by-team-member">by team member</h3>
            </div>
            <div className="profile-pic__username">
                <img className="profile-pic" src={UserIcon} alt="profile pic" />
                <h4 className="hello-username">Hello, Adam!</h4>
            </div>
        </header>
    );
}

export default Header;