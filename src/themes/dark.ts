import logo from '../logo-dark.svg';

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
        100: '#D6EEFC',
        200: '#AEDAF9',
        300: '#82BCEE',
        400: '#609EDE',
        500: '#3175C8',
        600: '#235AAC',
        700: '#184390',
        800: '#0F2F74',
        900: '#092060',
        transparent: {
            100: 'rgba(49, 117, 200, 0.08)',
            200: 'rgba(49, 117, 200, 0.16)',
            300: 'rgba(49, 117, 200, 0.24)',
            400: 'rgba(49, 117, 200, 0.32)',
            500: 'rgba(49, 117, 200, 0.40)',
            600: 'rgba(49, 117, 200, 0.48)',
        }
    },
    success: {
        100: '#E0F9E0',
        200: '#C2F3C7',
        300: '#99DBA6',
        400: '#72B787',
        500: '#44885f',
        600: '#317453',
        700: '#226148',
        800: '#154E3D',
        900: '#0D4136',
        transparent: {
            100: 'rgba(68, 136, 95, 0.08)',
            200: 'rgba(68, 136, 95, 0.16)',
            300: 'rgba(68, 136, 95, 0.24)',
            400: 'rgba(68, 136, 95, 0.32)',
            500: 'rgba(68, 136, 95, 0.40)',
            600: 'rgba(68, 136, 95, 0.48)',
        }
    },
    info: {
        100: '#CFFBF8',
        200: '#A1F7F8',
        300: '#6FE1EA',
        400: '#4AC1D6',
        500: '#1897bb',
        600: '#1176A0',
        700: '#0C5986',
        800: '#07406C',
        900: '#042E59',
        transparent: {
            100: 'rgba(24, 151, 187, 0.08)',
            200: 'rgba(24, 151, 187, 0.16)',
            300: 'rgba(24, 151, 187, 0.24)',
            400: 'rgba(24, 151, 187, 0.32)',
            500: 'rgba(24, 151, 187, 0.40)',
            600: 'rgba(24, 151, 187, 0.48)',
        }
    },
    warning: {
        100: '#FCF3C9',
        200: '#F9E495',
        300: '#EDCB5E',
        400: '#DBAF36',
        500: '#c48900',
        600: '#A87000',
        700: '#8D5900',
        800: '#714400',
        900: '#5E3600',
        transparent: {
            100: 'rgba(196, 137, 0, 0.08)',
            200: 'rgba(196, 137, 0, 0.16)',
            300: 'rgba(196, 137, 0, 0.24)',
            400: 'rgba(196, 137, 0, 0.32)',
            500: 'rgba(196, 137, 0, 0.40)',
            600: 'rgba(196, 137, 0, 0.48)',
        }
    },
    danger: {
        100: '#FCE3DD',
        200: '#F9C2BD',
        300: '#EE9898',
        400: '#DD7983',
        500: '#c74f67',
        600: '#AB395B',
        700: '#8F2750',
        800: '#731944',
        900: '#5F0F3D',
        transparent: {
            100: 'rgba(199, 79, 103, 0.08)',
            200: 'rgba(199, 79, 103, 0.16)',
            300: 'rgba(199, 79, 103, 0.24)',
            400: 'rgba(199, 79, 103, 0.32)',
            500: 'rgba(199, 79, 103, 0.40)',
            600: 'rgba(199, 79, 103, 0.48)',
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
                backgroundColor: palette.gray[600],
                borderColor: palette.gray[500],
                textColor: palette.gray[100],
                placeholderColor: palette.gray[300],
                focus: {
                    backgroundColor: palette.gray[500],
                    borderColor: palette.primary[500],
                },
                hover: {
                    backgroundColor: palette.gray[500],
                },
                disabled: {
                    backgroundColor: palette.gray.transparent[100],
                    borderColor: palette.gray[500],
                    textColor: palette.gray.transparent[400],
                    placeholderColor: palette.gray.transparent[500],
                },
            },
            success: {
                backgroundColor: palette.gray[600],
                borderColor: palette.success[600],
                textColor: palette.gray[100],
                placeholderColor: palette.gray[300],
                focus: {
                    backgroundColor: palette.gray[500],
                    borderColor: palette.success[500],
                },
                hover: {
                    backgroundColor: palette.gray[500],
                },
                disabled: {
                    backgroundColor: palette.gray.transparent[100],
                    borderColor: palette.gray[500],
                    textColor: palette.gray.transparent[400],
                    placeholderColor: palette.gray.transparent[500],
                },
            },
            info: {
                backgroundColor: palette.gray[600],
                borderColor: palette.info[600],
                textColor: palette.gray[100],
                placeholderColor: palette.gray[300],
                focus: {
                    backgroundColor: palette.gray[500],
                    borderColor: palette.info[500],
                },
                hover: {
                    backgroundColor: palette.gray[500],
                },
                disabled: {
                    backgroundColor: palette.gray.transparent[100],
                    borderColor: palette.gray[500],
                    textColor: palette.gray.transparent[400],
                    placeholderColor: palette.gray.transparent[500],
                },
            },
            warning: {
                backgroundColor: palette.gray[600],
                borderColor: palette.warning[600],
                textColor: palette.gray[100],
                placeholderColor: palette.gray[300],
                focus: {
                    backgroundColor: palette.gray[500],
                    borderColor: palette.warning[500],
                },
                hover: {
                    backgroundColor: palette.gray[500],
                },
                disabled: {
                    backgroundColor: palette.gray.transparent[100],
                    borderColor: palette.gray[500],
                    textColor: palette.gray.transparent[400],
                    placeholderColor: palette.gray.transparent[500],
                },
            },
            danger: {
                backgroundColor: palette.gray[600],
                borderColor: palette.danger[600],
                textColor: palette.gray[100],
                placeholderColor: palette.gray[300],
                focus: {
                    backgroundColor: palette.gray[500],
                    borderColor: palette.danger[500],
                },
                hover: {
                    backgroundColor: palette.gray[500],
                },
                disabled: {
                    backgroundColor: palette.gray.transparent[100],
                    borderColor: palette.gray[500],
                    textColor: palette.gray.transparent[400],
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
        textColor: palette.gray[100],
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
            textColor: palette.gray[400],
            checked: {
                backgroundColor: palette.gray.transparent[600],
                borderColor: palette.gray.transparent[300],
                checkmark: palette.gray[400],
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
        textColor: palette.gray[100],
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
            textColor: palette.gray.transparent[400],
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
        textColor: palette.gray[100],
        focus: {
            backgroundColor: palette.primary.transparent[300],
            borderColor: palette.gray[500],
        },
        hover: {
            backgroundColor: palette.primary.transparent[200],
            borderColor: palette.gray[500],
        },
        checked: {
            backgroundColor: palette.gray.transparent[400],
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
            textColor: palette.gray.transparent[400],
            checked: {
                backgroundColor: palette.gray.transparent[200],
                borderColor: palette.gray.transparent[300],
                checkmark: palette.gray.transparent[300],
            }
        },
    },

    card: {
        backgroundColor: palette.gray[600],
        textColor: palette.gray[100],
        borderColor: palette.gray[500],
        stripeColor: palette.gray[400],
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
        backgroundColor: palette.gray[900],
        backgroundGradient: `linear-gradient(to left, ${palette.gray[800]}}, ${palette.gray[900]})`,
        squareBackgroundColor: palette.primary.transparent[100]
    },

    dragons: {
        backgroundColor: palette.gray[900],
        backgroundGradient: `linear-gradient(to left, ${palette.gray[800]}}, ${palette.gray[900]})`
    }
};
