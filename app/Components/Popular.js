const React = require('react');
const PropTypes = require('prop-types');

function SelectedLanguage (props) {
    const langs = ["All", "JS", "PHP", "Ruby", "Java"];
    return (
        <ul className="languages">
            {
                langs.map(function(lang){
                    return <li
                        key={lang}
                        style={lang === props.selectedLanguage ? {color: "#d0012b"} : null}
                        onClick={()=>props.onClick(lang)}
                    >{lang}</li>
                }, this)
            }
        </ul>
    );
}
// https://reactjs.org/docs/typechecking-with-proptypes.html
SelectedLanguage.PropTypes = {
    selectedLanguage: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
};

class Popular extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedLanguage: 'All'
        }
        this.updateLang = this.updateLang.bind(this);
    }

    updateLang(lang){
        this.setState(function () {
            return { selectedLanguage: lang };
        });
        console.log(lang);
    }

    render() {

        return (
            <div>
                <SelectedLanguage selectedLanguage = {this.state.selectedLanguage}
                                  onClick= { this.updateLang }/>
            </div>
        );
    }
}

module.exports = Popular;