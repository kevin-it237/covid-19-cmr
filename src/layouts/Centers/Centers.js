/**
 * Created by Ndungla Joel on 7/6/2020.
 */
import React from 'react';
import './Centers.scss';
import Footer from '../../components/Footer/Footer';


class Centers extends React.Component {

    render() {
        return(
            <section>
                <div className="container my-5 conseils">
                    <div className="row py-5 centers">
                        <div className="col-sm-12">
                            <h1>
                                Centres spécialisés du Covid-19
                            </h1>
                            <p>Le <strong>Cameroun</strong>
                                compte plus d’un millier de cas positifs de <strong>Covid-19</strong>.
                                Les hôpitaux classiques étant étroits pour en accueillir davantage, le Premier ministre,
                                <strong>Joseph Dion Ngute</strong> a signé un décret le 20 avril créant des centres spéciaux
                                de prise en charge des patients atteints de Covid-19, en abrégé <strong>CSPP-Covid-19</strong>.
                                Ils sont chargés de l’administration des soins et du suivi médical des victimes ,
                                et sont soumis aux règles de fonctionnement et d’organisation des formations sanitaires publiques.</p>

                            <h2>Dans la ville de Yaoundé</h2>
                            <ul>
                                <li>Centre spécialisé du Stade Militaire</li>
                                <li>Centre spécialisé de l’ancien bâtiment de l’Entreprise Orca, au lieu-dit Carrefour Zoe.</li>
                            </ul>

                            <h2>Dans la ville de Douala</h2>
                            <ul>
                                <li>Centre spécialisé du Stade Mbappe Leppe</li>
                                <li>Centre spécialisé du camp des logements sociaux de Yassa.</li>
                            </ul>

                            <h2>Dans la ville de Limbe</h2>
                            <ul>
                                <li>Centre spécialisé du Middle Farm Stadium.</li>
                            </ul>

                            <h2>Dans la ville de Bafoussam</h2>
                            <ul>
                                <li>Centre spécialisé du camp des logements sociaux</li>
                                <li>Centre spécialisé du Stade Toket</li>
                            </ul>

                            <h2>Dans la ville de Garoua</h2>
                            <ul>
                                <li>Centre spécialisé du stade Roumde Adja</li>
                            </ul>


                            <div className="mt-5">
                                <p>
                                    Chaque centre sera administré par des médecins spécialistes ou généralistes désignés par le  ministre de la Santé publique, en raison  d’un chef assisté de deux adjoints.
                                </p>

                                <p>
                                    Chacun est l’annexe d’une grande formation hospitalière. Ainsi le Centre du Stade militaire de Yaoundé est l’annexe 1 de l’Hôpital central de Yaoundé. Celui de l’ancien bâtiment Orca dépend  aussi de l’Hôpital central. A Douala, deux  Centres répondent de l’Hôpital Laquintinie. Il s’agit du Stade Mbappe Leppe et le Camp des logements sociaux de Yassa.
                                </p>

                                <p>
                                    Le Centre spécial de l’Esplanade du Stade Roumde Adja est l’annxe de l’Hôpital Régional de Garoua. A Limbe, le  Middle Stadium est sous la tutelle de l’Hôpital Régional de Limbe. A Bafoussam le Camp des logements sociaux est l’annexe de l’Hôpital régional de Bafoussam. Idem que le Centre spécial de prise en charge des patients atteints de COVID-19 du stade Toket.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        )
    }
}

export default Centers;