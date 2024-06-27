import React from "react";
import i18n from "i18next";

export default class ChangeLang extends React.Component {
    state = {
      lang: "vn"
    };
    langChange = e => {
      this.setState({ [e.target.name]: e.target.value }, () => {
        localStorage.setItem("lang", this.state.lang);
        const lang = localStorage.getItem("lang");
        i18n.changeLanguage(lang);
      });
    };
    render() {
      const { t } = this.props;
      const { lang } = this.state;
      return (
        <div>
          <select
            className="selectBox"
            onChange={this.langChange}
            name="lang"
            value={lang}
          >
            <option className="optionsMenu" value="vn">
              Tiếng Việt
            </option>
            <option className="optionsMenu" value="en">
              English
            </option>
          </select>
        </div>
      );
    }
  }
  