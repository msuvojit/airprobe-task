import React, {Component} from 'react';

// import Custom Componenets
import Breadcrumb from '../common/breadcrumb.component';
import IconMarkUp from './icon-markup';

class FlagIcon extends Component {

    state = { iTag: null }


    getItag = (tag) => {
        this.setState({
            iTag: tag
        })

    }

    render() {
        return (
            <div>
                <Breadcrumb title="Flag Icons" parent="Icons"/>
                {/*Container-fluid starts*/}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-b-0">Flag Icons</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row icon-lists flag-icons">
                                        <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-in"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-in"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>IN</h5>
                                                    <h6 className="mt-0">India Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-ad"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ad"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>AD</h5>
                                                    <h6 className="mt-0">Andorra Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-ae"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ae"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>AE</h5>
                                                    <h6 className="mt-0">United Arab Emirates Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-af"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-af"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>AF</h5>
                                                    <h6 className="mt-0">Afghanistan Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-ag"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ag"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>AG</h5>
                                                    <h6 className="mt-0">Antigua and Barbuda Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-ai"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ai"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>AI</h5>
                                                    <h6 className="mt-0">Anguilla Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-al"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-al"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>AL</h5>
                                                    <h6 className="mt-0">Albania Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-am"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-am"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>AM</h5>
                                                    <h6 className="mt-0">Armenia Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-ao"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ao"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>AO</h5>
                                                    <h6 className="mt-0">Angola Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-ar"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ar"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>AR</h5>
                                                    <h6 className="mt-0">Argentina Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-as"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-as"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>AS</h5>
                                                    <h6 className="mt-0">American Samoa Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-at"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>AT</h5>
                                                    <h6 className="mt-0">Austria Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-au"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-au"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>AU</h5>
                                                    <h6 className="mt-0">Australia Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-aw"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-aw"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>AW</h5>
                                                    <h6 className="mt-0">Aruba Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-ax"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ax"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>AX</h5>
                                                    <h6 className="mt-0">Aland Islands Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-az"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-az"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>AZ</h5>
                                                    <h6 className="mt-0">Azerbaijan Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-ba"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ba"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>BA</h5>
                                                    <h6 className="mt-0">Bosnia and Herzegovina Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-bb"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-bb"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>BB</h5>
                                                    <h6 className="mt-0">Barbados Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-bd"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-bd"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>BD</h5>
                                                    <h6 className="mt-0">Bangladesh Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-be"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-be"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>BE</h5>
                                                    <h6 className="mt-0">Belgium Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-bf"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-bf"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>BF</h5>
                                                    <h6 className="mt-0">Burkina Faso Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-bg"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-bg"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>BG</h5>
                                                    <h6 className="mt-0">Bulgaria Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-bh"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-bh"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>BH</h5>
                                                    <h6 className="mt-0">Bahrain Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-bi"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-bi"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>BI</h5>
                                                    <h6 className="mt-0">Burundi Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-bj"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-bj"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>BJ</h5>
                                                    <h6 className="mt-0">Benin Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-bl"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-bl"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>BL</h5>
                                                    <h6 className="mt-0">Saint Barthélemy Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-bm"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-bm"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>BM</h5>
                                                    <h6 className="mt-0">Bermuda Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-bn"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-bn"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>BN</h5>
                                                    <h6 className="mt-0">Brunei Darussalam Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-bo"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-bo"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>BO</h5>
                                                    <h6 className="mt-0">Bolivia (Plurinational State of) Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-bq"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-bq"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>BQ</h5>
                                                    <h6 className="mt-0">Bonaire, Sint Eustatius and Saba Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-br"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-br"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>BR</h5>
                                                    <h6 className="mt-0">Brazil Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-bs"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-bs"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>BS</h5>
                                                    <h6 className="mt-0">Bahamas Flag</h6>
                                                    <h6 className="mt-0">Bahamas Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-bt"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>BT</h5>
                                                    <h6 className="mt-0">Bhutan Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-bw"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>BW</h5>
                                                    <h6 className="mt-0">Botswana Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-by"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>BY</h5>
                                                    <h6 className="mt-0">Belarus Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-bz"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>BZ</h5>
                                                    <h6 className="mt-0">Belize Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ca"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>CA</h5>
                                                    <h6 className="mt-0">Canada Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-cc"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>CC</h5>
                                                    <h6 className="mt-0">Cocos (Keeling) Islands Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-cd"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>CD</h5>
                                                    <h6 className="mt-0">Democratic Republic of the Congo Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-cf"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>CF</h5>
                                                    <h6 className="mt-0">Central African Republic Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-cg"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>CG</h5>
                                                    <h6 className="mt-0">Republic of the Congo Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ch"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>CH</h5>
                                                    <h6 className="mt-0">Switzerland Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ci"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>CI</h5>
                                                    <h6 className="mt-0">Côte d&#39;Ivoire Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ck"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>CK</h5>
                                                    <h6 className="mt-0">Cook Islands Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-cl"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>CL</h5>
                                                    <h6 className="mt-0">Chile Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-cm"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>CM</h5>
                                                    <h6 className="mt-0">Cameroon Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-cn"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>CN</h5>
                                                    <h6 className="mt-0">China Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-co"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>CO</h5>
                                                    <h6 className="mt-0">Colombia Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-cr"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>CR</h5>
                                                    <h6 className="mt-0">Costa Rica Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-cu"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>CU</h5>
                                                    <h6 className="mt-0">Cuba Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-cv"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>CV</h5>
                                                    <h6 className="mt-0">Cabo Verde Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-cw"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>CW</h5>
                                                    <h6 className="mt-0">Curaçao Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-cx"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>CX</h5>
                                                    <h6 className="mt-0">Christmas Island Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-cy"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>CY</h5>
                                                    <h6 className="mt-0">Cyprus Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-cz"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>CZ</h5>
                                                    <h6 className="mt-0">Czech Republic Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-de"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>DE</h5>
                                                    <h6 className="mt-0">Germany Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-dj"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>DJ</h5>
                                                    <h6 className="mt-0">Djibouti Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-dk"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>DK</h5>
                                                    <h6 className="mt-0">Denmark Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-dm"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>DM</h5>
                                                    <h6 className="mt-0">Dominica Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-do"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>DO</h5>
                                                    <h6 className="mt-0">Dominican Republic Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-dz"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>DZ</h5>
                                                    <h6 className="mt-0">Algeria Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ec"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>EC</h5>
                                                    <h6 className="mt-0">Ecuador Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ee"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>EE</h5>
                                                    <h6 className="mt-0">Estonia Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-eg"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>EG</h5>
                                                    <h6 className="mt-0">Egypt Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-eh"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>EH</h5>
                                                    <h6 className="mt-0">Western Sahara Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-er"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>ER</h5>
                                                    <h6 className="mt-0">Eritrea Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-es"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>ES</h5>
                                                    <h6 className="mt-0">Spain Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-et"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>ET</h5>
                                                    <h6 className="mt-0">Ethiopia Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-fi"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>FI</h5>
                                                    <h6 className="mt-0">Finland Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-fj"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>FJ</h5>
                                                    <h6 className="mt-0">Fiji Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-fk"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>FK</h5>
                                                    <h6 className="mt-0">Falkland Islands Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-fm"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>FM</h5>
                                                    <h6 className="mt-0">Federated States of Micronesia Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-fo"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>FO</h5>
                                                    <h6 className="mt-0">Faroe Islands Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-fr"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>FR</h5>
                                                    <h6 className="mt-0">France Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ga"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>GA</h5>
                                                    <h6 className="mt-0">Gabon Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-gb"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>GB</h5>
                                                    <h6 className="mt-0">United Kingdom Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-gd"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>GD</h5>
                                                    <h6 className="mt-0">Grenada Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ge"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>GE</h5>
                                                    <h6 className="mt-0">Georgia Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-gf"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>GF</h5>
                                                    <h6 className="mt-0">French Guiana Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-gg"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>GG</h5>
                                                    <h6 className="mt-0">Guernsey Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-gh"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>GH</h5>
                                                    <h6 className="mt-0">Ghana Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-gi"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>GI</h5>
                                                    <h6 className="mt-0">Gibraltar Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-gl"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>GL</h5>
                                                    <h6 className="mt-0">Greenland Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-gm"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>GM</h5>
                                                    <h6 className="mt-0">Gambia Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-gn"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>GN</h5>
                                                    <h6 className="mt-0">Guinea Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-gp"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>GP</h5>
                                                    <h6 className="mt-0">Guadeloupe Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-gq"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>GQ</h5>
                                                    <h6 className="mt-0">Equatorial Guinea Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-gr"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>GR</h5>
                                                    <h6 className="mt-0">Greece Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-gs"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>GS</h5>
                                                    <h6 className="mt-0">South Georgia and the South Sandwich Islands
                                                        Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-gt"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>GT</h5>
                                                    <h6 className="mt-0">Guatemala Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-gu"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>GU</h5>
                                                    <h6 className="mt-0">Guam Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-gw"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>GW</h5>
                                                    <h6 className="mt-0">Guinea-Bissau Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-gy"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>GY</h5>
                                                    <h6 className="mt-0">Guyana Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-hk"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>HK</h5>
                                                    <h6 className="mt-0">Hong Kong Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-hn"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>HN</h5>
                                                    <h6 className="mt-0">Honduras Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-hr"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>HR</h5>
                                                    <h6 className="mt-0">Croatia Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ht"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>HT</h5>
                                                    <h6 className="mt-0">Haiti Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-hu"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>HU</h5>
                                                    <h6 className="mt-0">Hungary Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-id"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>ID</h5>
                                                    <h6 className="mt-0">Indonesia Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ie"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>IE</h5>
                                                    <h6 className="mt-0">Ireland Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-il"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>IL</h5>
                                                    <h6 className="mt-0">Israel Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-im"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>IM</h5>
                                                    <h6 className="mt-0">Isle of Man Flag</h6>
                                                </div>
                                            </div>
                                        </div>

                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-io"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>IO</h5>
                                                    <h6 className="mt-0">British Indian Ocean Territory Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-iq"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>IQ</h5>
                                                    <h6 className="mt-0">Iraq Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ir"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>IR</h5>
                                                    <h6 className="mt-0">Iran (Islamic Republic of) Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-is"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>IS</h5>
                                                    <h6 className="mt-0">Iceland Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-it"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>IT</h5>
                                                    <h6 className="mt-0">Italy Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-je"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>JE</h5>
                                                    <h6 className="mt-0">Jersey Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-jm"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>JM</h5>
                                                    <h6 className="mt-0">Jamaica Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-jo"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>JO</h5>
                                                    <h6 className="mt-0">Jordan Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-jp"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>JP</h5>
                                                    <h6 className="mt-0">Japan Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ke"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>KE</h5>
                                                    <h6 className="mt-0">Kenya Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-kg"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>KG</h5>
                                                    <h6 className="mt-0">Kyrgyzstan Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-kh"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>KH</h5>
                                                    <h6 className="mt-0">Cambodia Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ki"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>KI</h5>
                                                    <h6 className="mt-0">Kiribati Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-km"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>KM</h5>
                                                    <h6 className="mt-0">Comoros Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-kn"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>KN</h5>
                                                    <h6 className="mt-0">Saint Kitts and Nevis Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-kp"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>KP</h5>
                                                    <h6 className="mt-0">North Korea Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-kr"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>KR</h5>
                                                    <h6 className="mt-0">South Korea Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-kw"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>KW</h5>
                                                    <h6 className="mt-0">Kuwait Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ky"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>KY</h5>
                                                    <h6 className="mt-0">Cayman Islands Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-kz"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>KZ</h5>
                                                    <h6 className="mt-0">Kazakhstan Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-la"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>LA</h5>
                                                    <h6 className="mt-0">Laos Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-lb"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>LB</h5>
                                                    <h6 className="mt-0">Lebanon Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-lc"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>LC</h5>
                                                    <h6 className="mt-0">Saint Lucia Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-li"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>LI</h5>
                                                    <h6 className="mt-0">Liechtenstein Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-lk"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>LK</h5>
                                                    <h6 className="mt-0">Sri Lanka Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-lr"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>LR</h5>
                                                    <h6 className="mt-0">Liberia Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ls"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>LS</h5>
                                                    <h6 className="mt-0">Lesotho Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-lt"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>LT</h5>
                                                    <h6 className="mt-0">Lithuania Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-lu"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>LU</h5>
                                                    <h6 className="mt-0">Luxembourg Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-lv"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>LV</h5>
                                                    <h6 className="mt-0">Latvia Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ly"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>LY</h5>
                                                    <h6 className="mt-0">Libya Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ma"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>MA</h5>
                                                    <h6 className="mt-0">Morocco Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-mc"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>MC</h5>
                                                    <h6 className="mt-0">Monaco Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-md"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>MD</h5>
                                                    <h6 className="mt-0">Moldova Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-me"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>ME</h5>
                                                    <h6 className="mt-0">Montenegro Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-mf"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>MF</h5>
                                                    <h6 className="mt-0">Saint Martin Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-mg"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>MG</h5>
                                                    <h6 className="mt-0">Madagascar Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-mh"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>MH</h5>
                                                    <h6 className="mt-0">Marshall Islands Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-mk"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>MK</h5>
                                                    <h6 className="mt-0">Former Yugoslav Republic of Macedonia Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ml"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>ML</h5>
                                                    <h6 className="mt-0">Mali Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-mm"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>MM</h5>
                                                    <h6 className="mt-0">Myanmar Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-mn"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>MN</h5>
                                                    <h6 className="mt-0">Mongolia Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-mo"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>MO</h5>
                                                    <h6 className="mt-0">Macau Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-mp"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>MP</h5>
                                                    <h6 className="mt-0">Northern Mariana Islands Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-mq"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>MQ</h5>
                                                    <h6 className="mt-0">Martinique Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-mr"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>MR</h5>
                                                    <h6 className="mt-0">Mauritania Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ms"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>MS</h5>
                                                    <h6 className="mt-0">Montserrat Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-mt"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>MT</h5>
                                                    <h6 className="mt-0">Malta Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-mu"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>MU</h5>
                                                    <h6 className="mt-0">Mauritius Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-mv"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>MV</h5>
                                                    <h6 className="mt-0">Maldives Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-mw"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>MW</h5>
                                                    <h6 className="mt-0">Malawi Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-mx"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>MX</h5>
                                                    <h6 className="mt-0">Mexico Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-my"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>MY</h5>
                                                    <h6 className="mt-0">Malaysia Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-mz"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>MZ</h5>
                                                    <h6 className="mt-0">Mozambique Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-na"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>NA</h5>
                                                    <h6 className="mt-0">Namibia Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-nc"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>NC</h5>
                                                    <h6 className="mt-0">New Caledonia Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ne"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>NE</h5>
                                                    <h6 className="mt-0">Niger Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-nf"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>NF</h5>
                                                    <h6 className="mt-0">Norfolk Island Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ng"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>NG</h5>
                                                    <h6 className="mt-0">Nigeria Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ni"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>NI</h5>
                                                    <h6 className="mt-0">Nicaragua Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-nl"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>NL</h5>
                                                    <h6 className="mt-0">Netherlands Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-no"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>NO</h5>
                                                    <h6 className="mt-0">Norway Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-np"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>NP</h5>
                                                    <h6 className="mt-0">Nepal Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-nr"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>NR</h5>
                                                    <h6 className="mt-0">Nauru Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-nu"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>NU</h5>
                                                    <h6 className="mt-0">Niue Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-nz"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>NZ</h5>
                                                    <h6 className="mt-0">New Zealand Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-om"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>OM</h5>
                                                    <h6 className="mt-0">Oman Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-pa"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>PA</h5>
                                                    <h6 className="mt-0">Panama Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-pe"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>PE</h5>
                                                    <h6 className="mt-0">Peru Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-pf"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>PF</h5>
                                                    <h6 className="mt-0">French Polynesia Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-pg"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>PG</h5>
                                                    <h6 className="mt-0">Papua New Guinea Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ph"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>PH</h5>
                                                    <h6 className="mt-0">Philippines Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-pk"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>PK</h5>
                                                    <h6 className="mt-0">Pakistan Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-pl"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>PL</h5>
                                                    <h6 className="mt-0">Poland Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-pm"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>PM</h5>
                                                    <h6 className="mt-0">Saint Pierre and Miquelon Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-pn"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>PN</h5>
                                                    <h6 className="mt-0">Pitcairn Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-pr"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>PR</h5>
                                                    <h6 className="mt-0">Puerto Rico Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ps"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>PS</h5>
                                                    <h6 className="mt-0">State of Palestine Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-pt"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>PT</h5>
                                                    <h6 className="mt-0">Portugal Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-pw"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>PW</h5>
                                                    <h6 className="mt-0">Palau Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-py"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>PY</h5>
                                                    <h6 className="mt-0">Paraguay Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-qa"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>QA</h5>
                                                    <h6 className="mt-0">Qatar Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-re"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>RE</h5>
                                                    <h6 className="mt-0">Réunion Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ro"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>RO</h5>
                                                    <h6 className="mt-0">Romania Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-rs"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>RS</h5>
                                                    <h6 className="mt-0">Serbia Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ru"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>RU</h5>
                                                    <h6 className="mt-0">Russia Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-rw"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>RW</h5>
                                                    <h6 className="mt-0">Rwanda Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-sa"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>SA</h5>
                                                    <h6 className="mt-0">Saudi Arabia Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-sb"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>SB</h5>
                                                    <h6 className="mt-0">Solomon Islands Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-sc"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>SC</h5>
                                                    <h6 className="mt-0">Seychelles Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-sd"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>SD</h5>
                                                    <h6 className="mt-0">Sudan Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-se"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>SE</h5>
                                                    <h6 className="mt-0">Sweden Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-sg"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>SG</h5>
                                                    <h6 className="mt-0">Singapore Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-sh"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>SH</h5>
                                                    <h6 className="mt-0">Saint Helena, Ascension and Tristan da Cunha
                                                        Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-si"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>SI</h5>
                                                    <h6 className="mt-0">Slovenia Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-sj"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>SJ</h5>
                                                    <h6 className="mt-0">Svalbard and Jan Mayen Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-sk"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>SK</h5>
                                                    <h6 className="mt-0">Slovakia Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-sl"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>SL</h5>
                                                    <h6 className="mt-0">Sierra Leone Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-sm"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>SM</h5>
                                                    <h6 className="mt-0">San Marino Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-sn"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>SN</h5>
                                                    <h6 className="mt-0">Senegal Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-so"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>SO</h5>
                                                    <h6 className="mt-0">Somalia Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-sr"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>SR</h5>
                                                    <h6 className="mt-0">Suriname Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ss"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>SS</h5>
                                                    <h6 className="mt-0">South Sudan Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-st"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>ST</h5>
                                                    <h6 className="mt-0">Sao Tome and Principe Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-sv"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>SV</h5>
                                                    <h6 className="mt-0">El Salvador Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-sx"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>SX</h5>
                                                    <h6 className="mt-0">Sint Maarten Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-sy"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>SY</h5>
                                                    <h6 className="mt-0">Syrian Arab Republic Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-sz"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>SZ</h5>
                                                    <h6 className="mt-0">Swaziland Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-tc"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>TC</h5>
                                                    <h6 className="mt-0">Turks and Caicos Islands Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-td"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>TD</h5>
                                                    <h6 className="mt-0">Chad Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-tf"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>TF</h5>
                                                    <h6 className="mt-0">French Southern Territories Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-tg"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>TG</h5>
                                                    <h6 className="mt-0">Togo Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-th"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>TH</h5>
                                                    <h6 className="mt-0">Thailand Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-tj"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>TJ</h5>
                                                    <h6 className="mt-0">Tajikistan Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-tk"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>TK</h5>
                                                    <h6 className="mt-0">Tokelau Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-tl"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>TL</h5>
                                                    <h6 className="mt-0">Timor-Leste Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-tm"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>TM</h5>
                                                    <h6 className="mt-0">Turkmenistan Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-tn"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>TN</h5>
                                                    <h6 className="mt-0">Tunisia Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-to"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>TO</h5>
                                                    <h6 className="mt-0">Tonga Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-tr"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>TR</h5>
                                                    <h6 className="mt-0">Turkey Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-tt"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>TT</h5>
                                                    <h6 className="mt-0">Trinidad and Tobago Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-tv"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>TV</h5>
                                                    <h6 className="mt-0">Tuvalu Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-tw"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>TW</h5>
                                                    <h6 className="mt-0">Taiwan Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-tz"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>TZ</h5>
                                                    <h6 className="mt-0">Tanzania Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ua"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>UA</h5>
                                                    <h6 className="mt-0">Ukraine Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ug"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>UG</h5>
                                                    <h6 className="mt-0">Uganda Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-um"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>UM</h5>
                                                    <h6 className="mt-0">United States Minor Outlying Islands Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-us"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>US</h5>
                                                    <h6 className="mt-0">United States of America Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-uy"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>UY</h5>
                                                    <h6 className="mt-0">Uruguay Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-uz"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>UZ</h5>
                                                    <h6 className="mt-0">Uzbekistan Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-va"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>VA</h5>
                                                    <h6 className="mt-0">Holy See Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-vc"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>VC</h5>
                                                    <h6 className="mt-0">Saint Vincent and the Grenadines Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ve"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>VE</h5>
                                                    <h6 className="mt-0">Venezuela (Bolivarian Republic of) Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-vg"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>VG</h5>
                                                    <h6 className="mt-0">Virgin Islands (British) Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-vi"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>VI</h5>
                                                    <h6 className="mt-0">Virgin Islands (U.S.) Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-vn"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>VN</h5>
                                                    <h6 className="mt-0">Vietnam Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-vu"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>VU</h5>
                                                    <h6 className="mt-0">Vanuatu Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-wf"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>WF</h5>
                                                    <h6 className="mt-0">Wallis and Futuna Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ws"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>WS</h5>
                                                    <h6 className="mt-0">Samoa Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-ye"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>YE</h5>
                                                    <h6 className="mt-0">Yemen Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-yt"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>YT</h5>
                                                    <h6 className="mt-0">Mayotte Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-za"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>ZA</h5>
                                                    <h6 className="mt-0">South Africa Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-zm"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>ZM</h5>
                                                    <h6 className="mt-0">Zambia Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-12 col-sm-6 col-xl-4" onClick={() => this.getItag('<i className="flag-icon flag-icon-at"></i>')}>
                                            <div className="media">
                                                <i className="flag-icon flag-icon-zw"></i>
                                                <div className="media-body align-self-center">
                                                    <h5>ZW</h5>
                                                    <h6 className="mt-0">Zimbabwe Flag</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Container-fluid Ends*/}

                <IconMarkUp itag={this.state.iTag} />
            </div>
        )
    }
}


export default FlagIcon;