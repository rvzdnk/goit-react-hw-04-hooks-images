import React, { Component } from 'react';
import styles from './Searchbar.module.css';

const INITIAL_STATE = {
  searchValue: '',
}

export class Searchbar extends Component {
  state = {...INITIAL_STATE}

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchValue);
    this.setState({...INITIAL_STATE});
  }

  render() {
    const {searchValue} = this.state;
    const {searchbar, form, form_btn, form_label, form_input} = styles;

    return (
      <header className={searchbar}>
        <form className={form} onSubmit={this.handleSubmit}>
          <button type="submit" className={form_btn}>
            <span className={form_label}></span>
          </button>

          <input
            className={form_input}
            type="text"
            name="searchValue"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchValue}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
