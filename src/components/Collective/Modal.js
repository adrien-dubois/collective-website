import React, { 
    useCallback, 
    useEffect, 
    useRef 
} from 'react'
import { 
    animated, 
    useSpring 
} from 'react-spring'
import { 
    Background, 
    CloseModalButton,
    ModalContent, 
    ModalImage, 
    ModalWrapper 
} from './Styles/Modal.elements'



export const Modal = ({showModal, setShowModal}) => {

    const modalRef = useRef()

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 :0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    })

    const closeModal = e => {
        if(modalRef.current === e.target) {
            setShowModal(false)
        }
    }

    const keyPress = useCallback(e => {
        if(e.key === 'Escape' && showModal) {
            setShowModal(false)
        }
    }, [setShowModal, showModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress)
        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress])

    return(
        <>
            {showModal ? (
                <Background ref={modalRef} onClick={closeModal} >
                    <animated.div style={animation}>
                        <ModalWrapper showModal={showModal}>
                            <ModalImage src={require('../../assets/img/modal.png')} alt="Astro Modal"/>
                            <ModalContent>
                                <h2>Services fournis</h2>
                                <p>Toutes nos prestations auront cette liste de services fournies dès le départ</p>
                                <ul>
                                    <li>feature fournie</li>
                                    <li>feature fournie</li>
                                    <li>feature fournie</li>
                                    <li>feature fournie</li>
                                    <li>feature fournie</li>
                                    <li>feature fournie</li>
                                </ul>
                                {/* <button>retour</button> */}
                            </ModalContent>
                            <CloseModalButton 
                                aria-label='Close modal' 
                                onClick={() => setShowModal(prev => !prev)} 
                            />
                        </ModalWrapper>
                    </animated.div>
                </Background>
            ) : null }
        </>
    )
}