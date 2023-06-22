import DailyFact from "./DailyFact";

export const Home = () => {
    return (
        <section className="home" id="homes">
            <div className="home-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra, ligula nec laoreet fermentum, mauris risus tincidunt ante, sed bibendum mauris ligula vitae velit. Aliquam in nisl nisi.
            </div>
            <button> <i class="bi bi-arrow-up-circle-fill"></i> </button>
            <div className="fact-container"> <DailyFact /></div>



        </section>
    )
}
