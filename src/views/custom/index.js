import React from 'react';
import {getText} from "../../store/reducers/text";
import {getCurrentEdit, getPoints} from "../../store/reducers/point";
import {compose} from "redux";
import connect from "react-redux/es/connect/connect";
import {addPoint, startEdit} from "../../store/actions/point";


class Custom extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        const {dispatch, current, points} = this.props;

        let listpoint = points.map(point =>

            <ul>
{/*
                <input type="text" value={point.name}/>
*/}
                <li>{point.id}</li>

            </ul>
        );


        let marker = points.map(point =>

            <div>
            <span className="point" style={{left : point.left, top : point.right }}></span>
            </div>
        );


        return (
            <div className="Custom">
                <div className="left">
                    {!current &&
                    <span>LISTE VIDE</span>}
                    {listpoint}
                </div>
                <div className="right" id="map" onClick={e => this.onAddPoint(e)}>
                    {marker}
                </div>
            </div>
        );
    };


    onAddPoint(e)
    {
        let point = {
            name : "Name: " + Date.now(),
            id : Date.now(),
            left : e.clientX,
            right : e.clientY,
        };
        this.props.dispatch(addPoint(point));
        this.props.dispatch(startEdit(point.id));
    }


        closepopup()
        {
            document.getElementsByClassName("formulaire").style.display = "none";

        }


}


const mapStateToProps = state => ({
    text: getText(state),
    current: getCurrentEdit(state),
    points: getPoints(state),
});

const enhance = compose(connect(mapStateToProps));

export default enhance(Custom);

