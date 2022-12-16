function Arrow({className}) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="8"
            fill="none"
            viewBox="0 0 12 8"
        >
            <path
                stroke="#fff"
                strokeWidth="2"
                d="M1 1l5 5 5-5"
                opacity="0.6"
            ></path>
        </svg>
    );
}

export default Arrow;
