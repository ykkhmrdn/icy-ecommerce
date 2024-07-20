import React from "react";

export default class Counter extends React.Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="relative flex items-center max-w-sm">
        <button
          type="button"
          id="decrement-button"
          data-input-counter-decrement="quantity-input"
          className="flex items-center h-4 p-2.5 bg-gray-100 border border-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 rounded-s-md focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
          onClick={this.decrement}
        >
          <svg
            className="w-3 h-3 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h16"
            />
          </svg>
        </button>
        <input
          type="text"
          id="quantity-input"
          data-input-counter
          aria-describedby="helper-text-explanation"
          className="block w-1/4 h-6 py-2 text-center text-gray-900 border-gray-300 bg-gray-50 border-x-0 text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={this.state.count}
          readOnly
        />
        <button
          type="button"
          id="increment-button"
          data-input-counter-increment="quantity-input"
          className="flex items-center h-4 p-2.5 bg-gray-100 border border-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 rounded-e-md focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
          onClick={this.increment}
        >
          <svg
            className="w-3 h-3 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
      </div>
    );
  }
}
