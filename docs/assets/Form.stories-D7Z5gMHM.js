import{j as t}from"./jsx-runtime-DQ32znRX.js";import{r as l}from"./index-DH5ua8nC.js";import{B as N}from"./Button.component-CA7mWAkL.js";import{C as O,h as te}from"./Input.component-Bce8lbtM.js";import{c as u,u as f,C as se}from"./Col-BHW6QTMh.js";import{P as x}from"./index-CpCSUgdU.js";import{C as v}from"./Card-BZ0i3L8i.js";/* empty css                      */import"./_commonjsHelpers-Cpj98o6Y.js";function re(e,o){return l.Children.toArray(e).some(a=>l.isValidElement(a)&&a.type===o)}const ne={type:x.string,tooltip:x.bool,as:x.elementType},L=l.forwardRef(({as:e="div",className:o,type:a="valid",tooltip:s=!1,...r},n)=>t.jsx(e,{...r,ref:n,className:u(o,`${a}-${s?"tooltip":"feedback"}`)}));L.displayName="Feedback";L.propTypes=ne;const G=L,le=l.createContext({}),F=le,q=l.forwardRef(({id:e,bsPrefix:o,className:a,type:s="checkbox",isValid:r=!1,isInvalid:n=!1,as:m="input",...c},d)=>{const{controlId:i}=l.useContext(F);return o=f(o,"form-check-input"),t.jsx(m,{...c,ref:d,type:s,id:e||i,className:u(a,o,r&&"is-valid",n&&"is-invalid")})});q.displayName="FormCheckInput";const A=q,B=l.forwardRef(({bsPrefix:e,className:o,htmlFor:a,...s},r)=>{const{controlId:n}=l.useContext(F);return e=f(e,"form-check-label"),t.jsx("label",{...s,ref:r,htmlFor:a||n,className:u(o,e)})});B.displayName="FormCheckLabel";const R=B,D=l.forwardRef(({id:e,bsPrefix:o,bsSwitchPrefix:a,inline:s=!1,reverse:r=!1,disabled:n=!1,isValid:m=!1,isInvalid:c=!1,feedbackTooltip:d=!1,feedback:i,feedbackType:g,className:p,style:C,title:h="",type:y="checkbox",label:j,children:w,as:Z="input",...P},ee)=>{o=f(o,"form-check"),a=f(a,"form-switch");const{controlId:T}=l.useContext(F),oe=l.useMemo(()=>({controlId:e||T}),[T,e]),S=!w&&j!=null&&j!==!1||re(w,R),ae=t.jsx(A,{...P,type:y==="switch"?"checkbox":y,ref:ee,isValid:m,isInvalid:c,disabled:n,as:Z});return t.jsx(F.Provider,{value:oe,children:t.jsx("div",{style:C,className:u(p,S&&o,s&&`${o}-inline`,r&&`${o}-reverse`,y==="switch"&&a),children:w||t.jsxs(t.Fragment,{children:[ae,S&&t.jsx(R,{title:h,children:j}),i&&t.jsx(G,{type:g,tooltip:d,children:i})]})})})});D.displayName="FormCheck";const b=Object.assign(D,{Input:A,Label:R}),M=l.forwardRef(({bsPrefix:e,type:o,size:a,htmlSize:s,id:r,className:n,isValid:m=!1,isInvalid:c=!1,plaintext:d,readOnly:i,as:g="input",...p},C)=>{const{controlId:h}=l.useContext(F);return e=f(e,"form-control"),t.jsx(g,{...p,type:o,size:s,ref:C,readOnly:i,id:r||h,className:u(n,d?`${e}-plaintext`:e,a&&`${e}-${a}`,o==="color"&&`${e}-color`,m&&"is-valid",c&&"is-invalid")})});M.displayName="FormControl";const ie=Object.assign(M,{Feedback:G}),z=l.forwardRef(({className:e,bsPrefix:o,as:a="div",...s},r)=>(o=f(o,"form-floating"),t.jsx(a,{ref:r,className:u(e,o),...s})));z.displayName="FormFloating";const me=z,U=l.forwardRef(({controlId:e,as:o="div",...a},s)=>{const r=l.useMemo(()=>({controlId:e}),[e]);return t.jsx(F.Provider,{value:r,children:t.jsx(o,{...a,ref:s})})});U.displayName="FormGroup";const H=U,J=l.forwardRef(({as:e="label",bsPrefix:o,column:a=!1,visuallyHidden:s=!1,className:r,htmlFor:n,...m},c)=>{const{controlId:d}=l.useContext(F);o=f(o,"form-label");let i="col-form-label";typeof a=="string"&&(i=`${i} ${i}-${a}`);const g=u(r,o,s&&"visually-hidden",a&&i);return n=n||d,a?t.jsx(se,{ref:c,as:"label",className:g,htmlFor:n,...m}):t.jsx(e,{ref:c,className:g,htmlFor:n,...m})});J.displayName="FormLabel";const ce=J,K=l.forwardRef(({bsPrefix:e,className:o,id:a,...s},r)=>{const{controlId:n}=l.useContext(F);return e=f(e,"form-range"),t.jsx("input",{...s,type:"range",ref:r,className:u(o,e),id:a||n})});K.displayName="FormRange";const de=K,Q=l.forwardRef(({bsPrefix:e,size:o,htmlSize:a,className:s,isValid:r=!1,isInvalid:n=!1,id:m,...c},d)=>{const{controlId:i}=l.useContext(F);return e=f(e,"form-select"),t.jsx("select",{...c,size:a,ref:d,className:u(s,e,o&&`${e}-${o}`,r&&"is-valid",n&&"is-invalid"),id:m||i})});Q.displayName="FormSelect";const ue=Q,W=l.forwardRef(({bsPrefix:e,className:o,as:a="small",muted:s,...r},n)=>(e=f(e,"form-text"),t.jsx(a,{...r,ref:n,className:u(o,e,s&&"text-muted")})));W.displayName="FormText";const pe=W,X=l.forwardRef((e,o)=>t.jsx(b,{...e,ref:o,type:"switch"}));X.displayName="Switch";const fe=Object.assign(X,{Input:b.Input,Label:b.Label}),Y=l.forwardRef(({bsPrefix:e,className:o,children:a,controlId:s,label:r,...n},m)=>(e=f(e,"form-floating"),t.jsxs(H,{ref:m,className:u(o,e),controlId:s,...n,children:[a,t.jsx("label",{htmlFor:s,children:r})]})));Y.displayName="FloatingLabel";const ye=Y,Fe={_ref:x.any,validated:x.bool,as:x.elementType},I=l.forwardRef(({className:e,validated:o,as:a="form",...s},r)=>t.jsx(a,{...s,ref:r,className:u(e,o&&"was-validated")}));I.displayName="Form";I.propTypes=Fe;const ge=Object.assign(I,{Group:H,Control:ie,Floating:me,Check:b,Switch:fe,Label:ce,Text:pe,Range:de,Select:ue,FloatingLabel:ye}),k=({onSubmit:e,onForgotPassword:o,onGoogleLogin:a,theme:s,isneon:r=!1})=>{const[n,m]=l.useState({username:"",password:""}),[c,d]=l.useState({username:!1,password:!1}),i=h=>{const{name:y,value:j}=h.target;m(w=>({...w,[y]:j}))},g=h=>{if(h.preventDefault(),!n.username){d(y=>({...y,username:!0}));return}if(!n.password){d(y=>({...y,password:!0}));return}d({username:!1,password:!1}),e(n)},p=te(s),C=` 0 0 5px ${p.textOnPrimary}, 0 0 5px ${p.textOnPrimary}, 0 0 5px ${p.textOnPrimary}, 0 0 5px ${p.textOnPrimary}`;return t.jsx(ge,{onSubmit:g,children:t.jsxs(v,{style:{background:p.primary,color:p.textOnPrimary,border:`${p.textOnPrimary} solid 1px`,boxShadow:r?C:""},children:[t.jsx(v.Header,{children:t.jsx(v.Title,{children:"Login Form"})}),t.jsxs(v.Body,{children:[t.jsx(O,{id:"username",label:"Username",type:"email",value:n.username,placeholder:"Enter your username",theme:s,handleChange:i,isneon:r,errors:c.username}),t.jsx(O,{id:"password",label:"Password",type:"password",value:n.password,placeholder:"Enter your password",theme:s,handleChange:i,isneon:r,errors:c.password}),t.jsx("br",{}),t.jsx(N,{type:"button",theme:s,size:"sm",label:"Forgot Password?",onClickEvent:()=>o(),AllCaps:!1,isneon:r}),t.jsx(N,{type:"button",theme:s,size:"sm",label:"Login with Google",onClickEvent:a,AllCaps:!1,isneon:r})]}),t.jsx(v.Footer,{children:t.jsx(N,{theme:s,size:"sm",label:"Guardar",type:"submit",AllCaps:!1,isneon:r})})]})})};try{k.displayName="LoginForm",k.__docgenInfo={description:"",displayName:"LoginForm",props:{theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"dark"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'},{value:'"info"'},{value:'"light"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"string"}},isneon:{defaultValue:{value:"false"},description:"",name:"isneon",required:!1,type:{name:"boolean"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(formData: LoginFormInput) => void"}},onForgotPassword:{defaultValue:null,description:"",name:"onForgotPassword",required:!0,type:{name:"() => void"}},onGoogleLogin:{defaultValue:null,description:"",name:"onGoogleLogin",required:!0,type:{name:"() => void"}}}}}catch{}const Re={title:"Component/Form",component:k,argTypes:{onSubmit:{},theme:{control:"select"},isneon:{control:"boolean"}},tags:["autodocs"],parameters:{layout:"centered"}},$={args:{theme:"primary",onSubmit:e=>{console.log("Form submitted with data:",e)},title:"FORMURARIO",subTitle:"Registro y mantencion de usuarios ",isneon:!1}};var _,E,V;$.parameters={...$.parameters,docs:{...(_=$.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    theme: "primary",
    onSubmit: (formData: LoginFormInput) => {
      console.log("Form submitted with data:", formData);
    },
    title: "FORMURARIO",
    subTitle: "Registro y mantencion de usuarios ",
    isneon: false
  }
}`,...(V=(E=$.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};const ke=["Basict"];export{$ as Basict,ke as __namedExportsOrder,Re as default};
