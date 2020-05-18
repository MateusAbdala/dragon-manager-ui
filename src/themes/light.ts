import logo from '../logo.svg';

const palette = {
    gray: {
        // white
        100: '#F0F0F7',
        200: '#E2E2F0',
        300: '#C1C1D3',
        400: '#9595A8',
        500: '#5E5E6E',
        600: '#44445E',
        700: '#2F2F4F',
        800: '#1D1D3F',
        900: '#121234',
        // black
        transparent: {
            100: 'rgba(94, 94, 110, 0.08)',
            200: 'rgba(94, 94, 110, 0.16)',
            300: 'rgba(94, 94, 110, 0.24)',
            400: 'rgba(94, 94, 110, 0.32)',
            500: 'rgba(94, 94, 110, 0.40)',
            600: 'rgba(94, 94, 110, 0.48)',
        }
    },
    primary: {
        100: '#CFECFD',
        200: '#A0D6FC',
        300: '#6FB9F7',
        400: '#4B9CEF',
        500: '#1472E5',
        600: '#0E58C4',
        700: '#0A41A4',
        800: '#062E84',
        900: '#03206D',
        transparent: {
            100: 'rgba(20, 114, 229, 0.08)',
            200: 'rgba(20, 114, 229, 0.16)',
            300: 'rgba(20, 114, 229, 0.24)',
            400: 'rgba(20, 114, 229, 0.32)',
            500: 'rgba(20, 114, 229, 0.40)',
            600: 'rgba(20, 114, 229, 0.48)',
        }
    },
    success: {
        100: '#D6FAD5',
        200: '#AEF5B5',
        300: '#7FE293',
        400: '#5AC57A',
        500: '#2CA05A',
        600: '#208954',
        700: '#16734D',
        800: '#0E5C44',
        900: '#084C3E',
        transparent: {
            100: 'rgba(44, 160, 90, 0.08)',
            200: 'rgba(44, 160, 90, 0.16)',
            300: 'rgba(44, 160, 90, 0.24)',
            400: 'rgba(44, 160, 90, 0.32)',
            500: 'rgba(44, 160, 90, 0.40)',
            600: 'rgba(44, 160, 90, 0.48)',
        }
    },
    info: {
        100: '#CAFCF9',
        200: '#96FAFA',
        300: '#60E7F1',
        400: '#39CBE4',
        500: '#00A5D3',
        600: '#0080B5',
        700: '#006097',
        800: '#00447A',
        900: '#003165',
        transparent: {
            100: 'rgba(0, 165, 211, 0.08)',
            200: 'rgba(0, 165, 211, 0.16)',
            300: 'rgba(0, 165, 211, 0.24)',
            400: 'rgba(0, 165, 211, 0.32)',
            500: 'rgba(0, 165, 211, 0.40)',
            600: 'rgba(0, 165, 211, 0.48)',
        }
    },
    warning: {
        100: '#FFF5CC',
        200: '#FFE999',
        300: '#FFDA66',
        400: '#FFCB3F',
        500: '#FFB200',
        600: '#DB9200',
        700: '#B77400',
        800: '#935900',
        900: '#7A4600',
        transparent: {
            100: 'rgba(255, 178, 0, 0.08)',
            200: 'rgba(255, 178, 0, 0.16)',
            300: 'rgba(255, 178, 0, 0.24)',
            400: 'rgba(255, 178, 0, 0.32)',
            500: 'rgba(255, 178, 0, 0.40)',
            600: 'rgba(255, 178, 0, 0.48)',
        }
    },
    danger: {
        100: '#FDDDD6',
        200: '#FCB5AE',
        300: '#F68485',
        400: '#ED6472',
        500: '#E23457',
        600: '#C22654',
        700: '#A21A4F',
        800: '#831048',
        900: '#6C0943',
        transparent: {
            100: 'rgba(226, 52, 87, 0.08)',
            200: 'rgba(226, 52, 87, 0.16)',
            300: 'rgba(226, 52, 87, 0.24)',
            400: 'rgba(226, 52, 87, 0.32)',
            500: 'rgba(226, 52, 87, 0.40)',
            600: 'rgba(226, 52, 87, 0.48)',
        }
    },
}

export default {
    logo: logo,
    // Components 
    loading: {
        color: palette.primary[500]
    },
    button: {
        cursor: 'pointer',
        disabledCursor: 'not-allowed',
        focusOutline: 'outline: 0; box-shadow: 0 0 0 0.375rem rgba(143, 155, 179, .16);',
        text: {
            fontWeight: '700',
        },
        sizes: {
            small: {
                fontSize: '0.875rem',
                lineHeight: '1rem',
                padding: '0.4375rem 0.875rem',
            },
            medium: {
                fontSize: '1rem',
                lineHeight: '1rem',
                padding: '0.6875rem 1.125rem',
            },
            large: {
                fontSize: '1.125rem',
                lineHeight: '1.25rem',
                padding: '0.8125rem 1.125rem',
            },
        },
        shapes: {
            rectangle: {
                borderRadius: '0.25rem',
            },
            semiround: {
                borderRadius: '0.75rem',
            },
            round: {
                borderRadius: '1.5rem',
            },
        },
        types: {
            filled: {
                border: {
                    style: 'solid',
                    width: '0.0625rem',
                },
                primary: {
                    backgroundColor: palette.primary[500],
                    borderColor: palette.primary[500],
                    textColor: '#ffffff',
                    focus: {
                        backgroundColor: palette.primary[600],
                        borderColor: palette.primary[700],
                        textColor: '#ffffff',
                    },
                    hover: {
                        backgroundColor: palette.primary[400],
                        borderColor: palette.primary[400],
                        textColor: '#ffffff',
                    },
                    active: {
                        backgroundColor: palette.primary[600],
                        borderColor: palette.primary[600],
                        textColor: '#ffffff',
                    },
                    disabled: {
                        backgroundColor: palette.primary[300],
                        borderColor: palette.primary[300],
                        textColor: '#ffffff',
                    },
                },
                success: {
                    backgroundColor: palette.success[500],
                    borderColor: palette.success[500],
                    textColor: '#ffffff',
                    focus: {
                        backgroundColor: palette.success[600],
                        borderColor: palette.success[500],
                        textColor: '#ffffff',
                    },
                    hover: {
                        backgroundColor: palette.success[400],
                        borderColor: palette.success[400],
                        textColor: '#ffffff',
                    },
                    active: {
                        backgroundColor: palette.success[600],
                        borderColor: palette.success[600],
                        textColor: '#ffffff',
                    },
                    disabled: {
                        backgroundColor: palette.success[300],
                        borderColor: palette.success[300],
                        textColor: '#ffffff',
                    },
                },
                info: {
                    backgroundColor: palette.info[500],
                    borderColor: palette.info[500],
                    textColor: '#ffffff',
                    focus: {
                        backgroundColor: palette.info[600],
                        borderColor: palette.info[500],
                        textColor: '#ffffff',
                    },
                    hover: {
                        backgroundColor: palette.info[400],
                        borderColor: palette.info[400],
                        textColor: '#ffffff',
                    },
                    active: {
                        backgroundColor: palette.info[600],
                        borderColor: palette.info[600],
                        textColor: '#ffffff',
                    },
                    disabled: {
                        backgroundColor: palette.info[300],
                        borderColor: palette.info[300],
                        textColor: '#ffffff',
                    },
                },
                warning: {
                    backgroundColor: palette.warning[500],
                    borderColor: palette.warning[500],
                    textColor: '#ffffff',
                    focus: {
                        backgroundColor: palette.warning[600],
                        borderColor: palette.warning[500],
                        textColor: '#ffffff',
                    },
                    hover: {
                        backgroundColor: palette.warning[400],
                        borderColor: palette.warning[400],
                        textColor: '#ffffff',
                    },
                    active: {
                        backgroundColor: palette.warning[600],
                        borderColor: palette.warning[600],
                        textColor: '#ffffff',
                    },
                    disabled: {
                        backgroundColor: palette.warning[300],
                        borderColor: palette.warning[300],
                        textColor: '#ffffff',
                    },
                },
                danger: {
                    backgroundColor: palette.danger[500],
                    borderColor: palette.danger[500],
                    textColor: '#ffffff',
                    focus: {
                        backgroundColor: palette.danger[600],
                        borderColor: palette.danger[500],
                        textColor: '#ffffff',
                    },
                    hover: {
                        backgroundColor: palette.danger[400],
                        borderColor: palette.danger[400],
                        textColor: '#ffffff',
                    },
                    active: {
                        backgroundColor: palette.danger[600],
                        borderColor: palette.danger[600],
                        textColor: '#ffffff',
                    },
                    disabled: {
                        backgroundColor: palette.danger[300],
                        borderColor: palette.danger[300],
                        textColor: '#ffffff',
                    },
                },
            },
            outline: {
                border: {
                    style: 'solid',
                    width: '0.0625rem'
                },
                primary: {
                    backgroundColor: palette.primary.transparent[100],
                    borderColor: palette.primary[500],
                    textColor: palette.primary[500],
                    focus: {
                        backgroundColor: palette.primary.transparent[300],
                        borderColor: palette.primary[500],
                        textColor: palette.primary[500],
                    },
                    hover: {
                        backgroundColor: palette.primary.transparent[200],
                        borderColor: palette.primary[500],
                        textColor: palette.primary[500],
                    },
                    active: {
                        backgroundColor: palette.primary.transparent[300],
                        borderColor: palette.primary[500],
                        textColor: palette.primary[500],
                    },
                    disabled: {
                        backgroundColor: palette.primary.transparent[600],
                        borderColor: palette.primary.transparent[600],
                        textColor: palette.primary[500],
                    },
                },
                success: {
                    backgroundColor: palette.success.transparent[100],
                    borderColor: palette.success[500],
                    textColor: palette.success[500],
                    focus: {
                        backgroundColor: palette.success.transparent[300],
                        borderColor: palette.success[500],
                        textColor: palette.success[500],
                    },
                    hover: {
                        backgroundColor: palette.success.transparent[200],
                        borderColor: palette.success[500],
                        textColor: palette.success[500],
                    },
                    active: {
                        backgroundColor: palette.success.transparent[300],
                        borderColor: palette.success[500],
                        textColor: palette.success[500],
                    },
                    disabled: {
                        backgroundColor: palette.success.transparent[600],
                        borderColor: palette.success.transparent[600],
                        textColor: palette.success[500],
                    },
                },
                info: {
                    backgroundColor: palette.info.transparent[100],
                    borderColor: palette.info[500],
                    textColor: palette.info[500],
                    focus: {
                        backgroundColor: palette.info.transparent[300],
                        borderColor: palette.info[500],
                        textColor: palette.info[500],
                    },
                    hover: {
                        backgroundColor: palette.info.transparent[200],
                        borderColor: palette.info[500],
                        textColor: palette.info[500],
                    },
                    active: {
                        backgroundColor: palette.info.transparent[300],
                        borderColor: palette.info[500],
                        textColor: palette.info[500],
                    },
                    disabled: {
                        backgroundColor: palette.info.transparent[600],
                        borderColor: palette.info.transparent[600],
                        textColor: palette.info[500],
                    },
                },
                warning: {
                    backgroundColor: palette.warning.transparent[100],
                    borderColor: palette.warning[500],
                    textColor: palette.warning[500],
                    focus: {
                        backgroundColor: palette.warning.transparent[300],
                        borderColor: palette.warning[500],
                        textColor: palette.warning[500],
                    },
                    hover: {
                        backgroundColor: palette.warning.transparent[200],
                        borderColor: palette.warning[500],
                        textColor: palette.warning[500],
                    },
                    active: {
                        backgroundColor: palette.warning.transparent[300],
                        borderColor: palette.warning[500],
                        textColor: palette.warning[500],
                    },
                    disabled: {
                        backgroundColor: palette.warning.transparent[600],
                        borderColor: palette.warning.transparent[600],
                        textColor: palette.warning[500],
                    },
                },
                danger: {
                    backgroundColor: palette.danger.transparent[100],
                    borderColor: palette.danger[500],
                    textColor: palette.danger[500],
                    focus: {
                        backgroundColor: palette.danger.transparent[300],
                        borderColor: palette.danger[500],
                        textColor: palette.danger[500],
                    },
                    hover: {
                        backgroundColor: palette.danger.transparent[200],
                        borderColor: palette.danger[500],
                        textColor: palette.danger[500],
                    },
                    active: {
                        backgroundColor: palette.danger.transparent[300],
                        borderColor: palette.danger[500],
                        textColor: palette.danger[500],
                    },
                    disabled: {
                        backgroundColor: palette.danger.transparent[600],
                        borderColor: palette.danger.transparent[600],
                        textColor: palette.danger[500],
                    },
                },
            },
            ghost: {
                border: {
                    style: 'solid',
                    width: '0.0625rem',
                },
                primary: {
                    backgroundColor: 'transparent',
                    borderColor: 'transparent',
                    textColor: palette.primary[500],
                    focus: {
                        backgroundColor: 'rgba(143, 155, 179, 0.16)',
                        borderColor: 'transparent',
                        textColor: palette.primary[500],
                    },
                    hover: {
                        backgroundColor: 'rgba(143, 155, 179, 0.08)',
                        borderColor: 'transparent',
                        textColor: palette.primary[500],
                    },
                    active: {
                        backgroundColor: 'rgba(143, 155, 179, 0.16)',
                        borderColor: 'transparent',
                        textColor: palette.primary[500],
                    },
                    disabled: {
                        backgroundColor: 'rgba(143, 155, 179, 0.16)',
                        borderColor: 'transparent',
                        textColor: 'rgba(143, 155, 179, 0.48)',
                    },
                },
                success: {
                    backgroundColor: 'transparent',
                    borderColor: 'transparent',
                    textColor: palette.success[500],
                    focus: {
                        backgroundColor: 'rgba(143, 155, 179, 0.16)',
                        borderColor: 'transparent',
                        textColor: palette.success[500],
                    },
                    hover: {
                        backgroundColor: 'rgba(143, 155, 179, 0.08)',
                        borderColor: 'transparent',
                        textColor: palette.success[500],
                    },
                    active: {
                        backgroundColor: 'rgba(143, 155, 179, 0.16)',
                        borderColor: 'transparent',
                        textColor: palette.success[500],
                    },
                    disabled: {
                        backgroundColor: 'rgba(143, 155, 179, 0.16)',
                        borderColor: 'transparent',
                        textColor: 'rgba(143, 155, 179, 0.48)',
                    },
                },
                info: {
                    backgroundColor: 'transparent',
                    borderColor: 'transparent',
                    textColor: palette.info[500],
                    focus: {
                        backgroundColor: 'rgba(143, 155, 179, 0.16)',
                        borderColor: 'transparent',
                        textColor: palette.info[500],
                    },
                    hover: {
                        backgroundColor: 'rgba(143, 155, 179, 0.08)',
                        borderColor: 'transparent',
                        textColor: palette.info[500],
                    },
                    active: {
                        backgroundColor: 'rgba(143, 155, 179, 0.16)',
                        borderColor: 'transparent',
                        textColor: palette.info[500],
                    },
                    disabled: {
                        backgroundColor: 'rgba(143, 155, 179, 0.16)',
                        borderColor: 'transparent',
                        textColor: 'rgba(143, 155, 179, 0.48)',
                    },
                },
                warning: {
                    backgroundColor: 'transparent',
                    borderColor: 'transparent',
                    textColor: palette.warning[500],
                    focus: {
                        backgroundColor: 'rgba(143, 155, 179, 0.16)',
                        borderColor: 'transparent',
                        textColor: palette.warning[500],
                    },
                    hover: {
                        backgroundColor: 'rgba(143, 155, 179, 0.08)',
                        borderColor: 'transparent',
                        textColor: palette.warning[500],
                    },
                    active: {
                        backgroundColor: 'rgba(143, 155, 179, 0.16)',
                        borderColor: 'transparent',
                        textColor: palette.warning[500],
                    },
                    disabled: {
                        backgroundColor: 'rgba(143, 155, 179, 0.16)',
                        borderColor: 'transparent',
                        textColor: 'rgba(143, 155, 179, 0.48)',
                    },
                },
                danger: {
                    backgroundColor: 'transparent',
                    borderColor: 'transparent',
                    textColor: palette.danger[500],
                    focus: {
                        backgroundColor: 'rgba(143, 155, 179, 0.16)',
                        borderColor: 'transparent',
                        textColor: palette.danger[500],
                    },
                    hover: {
                        backgroundColor: 'rgba(143, 155, 179, 0.08)',
                        borderColor: 'transparent',
                        textColor: palette.danger[500],
                    },
                    active: {
                        backgroundColor: 'rgba(143, 155, 179, 0.16)',
                        borderColor: 'transparent',
                        textColor: palette.danger[500],
                    },
                    disabled: {
                        backgroundColor: 'rgba(143, 155, 179, 0.16)',
                        borderColor: 'transparent',
                        textColor: 'rgba(143, 155, 179, 0.48)',
                    },
                },
            },
        },
    },
    input: {
        cursor: 'text',
        disabledCursor: 'not-allowed',
        focusOutline: 'outline: 0; box-shadow: 0 0 0 0.375rem rgba(143, 155, 179, .16);',
        text: {
            fontWeight: '700',
        },
        sizes: {
            small: {
                fontSize: '0.875rem',
                lineHeight: '1rem',
                padding: '0.4375rem 0.875rem',
            },
            medium: {
                fontSize: '1rem',
                lineHeight: '1rem',
                padding: '0.6875rem 1.125rem',
            },
            large: {
                fontSize: '1.125rem',
                lineHeight: '1.25rem',
                padding: '0.8125rem 1.125rem',
            },
        },
        shapes: {
            rectangle: {
                borderRadius: '0.25rem',
            },
            semiround: {
                borderRadius: '0.75rem',
            },
            round: {
                borderRadius: '1.5rem',
            },
        },
        types: {
            border: {
                style: 'solid',
                width: '0.0625rem'
            },
            primary: {
                backgroundColor: 'white',
                borderColor: palette.gray[600],
                textColor: palette.gray[900],
                placeholderColor: palette.gray[600],
                focus: {
                    backgroundColor: palette.gray[100],
                    borderColor: palette.primary[500],
                },
                hover: {
                    backgroundColor: palette.gray[100],
                },
                disabled: {
                    backgroundColor: palette.gray.transparent[100],
                    borderColor: palette.gray[500],
                    textColor: palette.gray.transparent[600],
                    placeholderColor: palette.gray.transparent[500],
                },
            },
            success: {
                backgroundColor: 'white',
                borderColor: palette.success[600],
                textColor: palette.gray[900],
                placeholderColor: palette.gray[600],
                focus: {
                    backgroundColor: palette.gray[100],
                    borderColor: palette.success[500],
                },
                hover: {
                    backgroundColor: palette.gray[100],
                },
                disabled: {
                    backgroundColor: palette.gray.transparent[100],
                    borderColor: palette.gray[500],
                    textColor: palette.gray.transparent[600],
                    placeholderColor: palette.gray.transparent[500],
                },
            },
            info: {
                backgroundColor: 'white',
                borderColor: palette.info[600],
                textColor: palette.gray[900],
                placeholderColor: palette.gray[600],
                focus: {
                    backgroundColor: palette.gray[100],
                    borderColor: palette.info[500],
                },
                hover: {
                    backgroundColor: palette.gray[100],
                },
                disabled: {
                    backgroundColor: palette.gray.transparent[100],
                    borderColor: palette.gray[500],
                    textColor: palette.gray.transparent[600],
                    placeholderColor: palette.gray.transparent[500],
                },
            },
            warning: {
                backgroundColor: 'white',
                borderColor: palette.warning[600],
                textColor: palette.gray[900],
                placeholderColor: palette.gray[600],
                focus: {
                    backgroundColor: palette.gray[100],
                    borderColor: palette.warning[500],
                },
                hover: {
                    backgroundColor: palette.gray[100],
                },
                disabled: {
                    backgroundColor: palette.gray.transparent[100],
                    borderColor: palette.gray[500],
                    textColor: palette.gray.transparent[600],
                    placeholderColor: palette.gray.transparent[500],
                },
            },
            danger: {
                backgroundColor: 'white',
                borderColor: palette.danger[600],
                textColor: palette.gray[900],
                placeholderColor: palette.gray[600],
                focus: {
                    backgroundColor: palette.gray[100],
                    borderColor: palette.danger[500],
                },
                hover: {
                    backgroundColor: palette.gray[100],
                },
                disabled: {
                    backgroundColor: palette.gray.transparent[100],
                    borderColor: palette.gray[500],
                    textColor: palette.gray.transparent[600],
                    placeholderColor: palette.gray.transparent[500],
                },
            },
        },
    },

    checkbox: {
        cursor: 'pointer',
        disabledCursor: 'not-allowed',
        focusOutline: 'outline: 0; box-shadow: 0 0 0 0.375rem rgba(143, 155, 179, .16);',
        text: {
            fontWeight: '600',
        },
        backgroundColor: palette.primary.transparent[100],
        borderColor: palette.gray[500],
        textColor: palette.gray[800],
        focus: {
            backgroundColor: palette.primary.transparent[300],
            borderColor: palette.gray[500],
        },
        hover: {
            backgroundColor: palette.primary.transparent[200],
            borderColor: palette.gray[500],
        },
        checked: {
            backgroundColor: palette.primary[500],
            borderColor: palette.primary[500],
            checkmark: 'white',
            focus: {
                backgroundColor: palette.primary[600],
                borderColor: palette.primary[700],
            },
            hover: {
                backgroundColor: palette.primary[400],
                borderColor: palette.primary[400],
            },
        },
        disabled: {
            backgroundColor: palette.gray.transparent[200],
            borderColor: palette.gray.transparent[300],
            textColor: palette.gray.transparent[600],
            checked: {
                backgroundColor: palette.gray.transparent[600],
                borderColor: palette.gray.transparent[300],
                checkmark: 'white',
            }
        },
    },

    toggle: {
        cursor: 'pointer',
        disabledCursor: 'not-allowed',
        focusOutline: 'outline: 0; box-shadow: 0 0 0 0.375rem rgba(143, 155, 179, .16);',
        text: {
            fontWeight: '600',
        },
        backgroundColor: palette.primary.transparent[300],
        borderColor: palette.gray[500],
        textColor: palette.gray[800],
        focus: {
            backgroundColor: palette.primary.transparent[300],
            borderColor: palette.gray[500],
        },
        hover: {
            backgroundColor: palette.primary.transparent[200],
            borderColor: palette.gray[500],
        },
        checked: {
            backgroundColor: palette.primary[500],
            borderColor: palette.primary[500],
            checkmark: 'white',
            focus: {
                backgroundColor: palette.primary[600],
                borderColor: palette.primary[700],
            },
            hover: {
                backgroundColor: palette.primary[400],
                borderColor: palette.primary[400],
            },
        },
        disabled: {
            backgroundColor: palette.gray.transparent[200],
            borderColor: palette.gray.transparent[300],
            textColor: palette.gray.transparent[600],
            checked: {
                backgroundColor: palette.gray.transparent[600],
                borderColor: palette.gray.transparent[300],
                checkmark: 'white',
            }
        },
    },

    radio: {
        cursor: 'pointer',
        disabledCursor: 'not-allowed',
        focusOutline: 'outline: 0; box-shadow: 0 0 0 0.375rem rgba(143, 155, 179, .16);',
        text: {
            fontWeight: '600',
        },
        backgroundColor: palette.primary.transparent[100],
        borderColor: palette.gray[500],
        textColor: palette.gray[800],
        focus: {
            backgroundColor: palette.primary.transparent[300],
            borderColor: palette.gray[500],
        },
        hover: {
            backgroundColor: palette.primary.transparent[200],
            borderColor: palette.gray[500],
        },
        checked: {
            backgroundColor: 'white',
            borderColor: palette.primary[500],
            checkmark: palette.primary[500],
            focus: {
                backgroundColor: palette.primary.transparent[300],
                borderColor: palette.primary[600],
            },
            hover: {
                backgroundColor: palette.primary.transparent[200],
                borderColor: palette.primary[500],
            },
        },
        disabled: {
            backgroundColor: palette.gray.transparent[200],
            borderColor: palette.gray.transparent[300],
            textColor: palette.gray.transparent[600],
            checked: {
                backgroundColor: palette.gray.transparent[200],
                borderColor: palette.gray.transparent[300],
                checkmark: palette.gray.transparent[300],
            }
        },
    },

    card: {
        backgroundColor: 'white',
        textColor: palette.gray[800],
        borderColor: palette.gray[300],
        stripeColor: palette.gray[200],
        accent: {
            primary: palette.primary[500],
            success: palette.success[500],
            info: palette.info[500],
            warning: palette.warning[500],
            danger: palette.danger[500],
        },
    },

    // Pages
    login: {
        backgroundColor: palette.primary[300],
        backgroundGradient: `linear-gradient(to left, ${palette.primary[100]}, ${palette.primary[300]})`,
        squareBackgroundColor: palette.primary.transparent[200]
    },

    dragons: {
        backgroundColor: palette.primary[300],
        backgroundGradient: `linear-gradient(to left, ${palette.primary[100]}, ${palette.primary[300]})`,
    }
};
