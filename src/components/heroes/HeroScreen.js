import React, { useMemo } from 'react';
import { useParams, Redirect } from "react-router-dom";
import { heroImages } from '../../helpers/heroesImages';
import { getHeroesById } from '../../selectors/getHeroesById';


export const HeroScreen = ({history}) => {
    const { heroeId } = useParams();

    const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);

    console.log('Hero: ', hero, 'HeroId:', heroeId);
    if (!hero) {
        return <Redirect to="/" />
    }

    const handleReturn = () => {
        if (history.length <= 2) {
            history.push('/');
        }else{
            history.goBack();
        }
    }
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    console.log(heroImages(`./${heroeId}.jpg`));
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    // src={`../assets/${heroeId}.jpg`}
                    src={heroImages(`./${heroeId}.jpg`).default}
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush animate__animated animate__fadeIn">
                    <li className="list-group-item"><b>Alter ego:</b> {alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b> {publisher}</li>
                    <li className="list-group-item"><b>First appearance:</b> {first_appearance}</li>
                </ul>
                <h5>Characteres</h5>
                <p>{characters}</p>
                <button 
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                >
                    Return
                </button>
            </div>
        </div>
    )
}
