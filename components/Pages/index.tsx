import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';
import { MongoCryptKMSRequestNetworkTimeoutError } from 'mongodb';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
  let name = "Turing Team"


  return (
    <div style={{ direction: "ltr", minHeight: "11vh", }}>
      <br-x />
      <Window title={name} style={{
        minHeight: 440, margin: 10, width: "calc(100% - 20px)", backgroundImage: 'url("https://irmapserver.ir/research/7/pinksky3.avif")',
        backgroundRepeat: "no-repeat", backgroundSize: "cover"
      }}>

        <br />
        <br />
        <br />
        
        <c-x >


          <f-x style={{ fontSize: 40, fontWeight: 'bolder', color: 'white' }}>
            <sp-1 /><sp-1 /><sp-1 /><sp-1 /><sp-1 /><sp-1 />

            weather
          </f-x>
          
          

          <f-cse>

            <f-cc style={{ height: 100, width: 300, backgroundColor: 'rgb(251 231 239 )', borderRadius: 10, fontSize: 25 }}>

              <img src="https://irmapserver.ir/research/7/temp.webp" style={{ height: 27, objectFit: 'contain' }} />
              <sp-3 />
              FeelsLike:
              <sp-3 />
              {props.feelslikec}°c

            </f-cc>

            <f-cc style={{ height: 100, width: 300, backgroundColor: 'rgba(255 255 255/0.8)', borderRadius: 10, fontSize: 25 }}>

              <img src="https://irmapserver.ir/research/7/humidity.png" style={{ height: 26, width: 35, objectFit: 'contain' }} />
              <sp-6 />
              Humidity:
              <sp-3 />
              {props.humidity}
              <sp-3 />
              <f-14>
                %RH
              </f-14>

            </f-cc>


          </f-cse>

          <br-x/>
          <br-x/>
          <br-x/>

          <f-cse>

            <f-cc style={{ height: 103, width: 300, backgroundColor: 'rgba(255 255 255/0.8', borderRadius: 10, fontSize: 25 }}>

              <img src="https://irmapserver.ir/research/7/sunrise.png" style={{ height: 28, objectFit: 'contain' }} />
              <sp-3 />
              Sunrise:
              <sp-3 />
              {props.sunrise}

            </f-cc>

            <f-cc style={{ height: 103, width: 300, backgroundColor: 'rgb(251 231 239)', borderRadius: 10, fontSize: 25 }}>

              <img src="https://irmapserver.ir/research/7/city.png" style={{ height: 28, objectFit: 'contain' }} />
              <sp-3/>
              
              City:
              <sp-3 />
              {props.city}
              <sp-3 />
              

            </f-cc>


          </f-cse>

        </c-x>


      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;


  let data = await (await fetch("https://irmapserver.ir/research/api/weather/")).json()

  let feelslikec = data.current_condition[0].FeelsLikeC
  let humidity = data.current_condition[0].humidity
  let sunrise = data.weather[0].astronomy[0].sunrise
  let city = data.nearest_area[0].areaName[0].value
 





  return {
    props: {
      data: global.QSON.stringify({
        session,
        feelslikec,
        humidity,
        sunrise,
        city,
        // nlangs,
      })
    },
  }
}