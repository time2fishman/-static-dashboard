import UserInfo from "./UserInfo";
import Sales from "./Sales"
import OnlineProfile from "./OnlineProfile";

const Cards = (props) => {
    return (
        <main className='cards-container'>
            {props.userData.map((card) => {
                return (
                    <section className='card' key={card.id}>
                        <UserInfo userInitials={card.userInitials} username={card.username} userTag={card.userTag} />
                        <Sales userComparisonPercent={card.userComparisonPercent} userSales={card.userSales} upArrow="../imgs/icons8-up-arrow-25.png" />
                        <OnlineProfile />
                    </section>
                )
            })}
        </main>
    )
};

export default Cards;