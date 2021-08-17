import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, *::after, *::before {
        box-sizing: inherit;
    }

    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: all .5s linear;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }

    button {
        font-size: 100%;
        font-family: inherit;
        border: 0;
        padding: 0;
    }

    a, a:hover, a:focus, a:active {
        text-decoration: none;
        color: inherit;
    }

    .auth-view {
        display: flex;
        flex-direction: column;
    }

    span.container {
        width: 80vw;
    }

    .dictionary_module {
        z-index: 0;
        display: flex;
        position: relative;
        flex-direction: column;
        padding-top: 5rem;
    }

    .dictionary_container {
        list-style: none;
        padding: 1rem 0 0;
    }

    .search_bar {
        position: fixed;
        top: 6rem;
        left: 1rem;
    }

    .pagination {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: auto;
        grid-template-rows: 1fr;
        list-style: none;
    }

    .pagination > li {
        cursor: pointer;
    }

`;
