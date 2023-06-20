import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { rss } from '../styles/Nstyles';
import axios from 'axios';

export const CalculadoraScreen = () => {


    const [tipo, setTipo] = useState(0);
    const [negativo, setNegativo] = useState(0);
    const [valorFinal, setValorFinal] = useState('');

    const [valorPasado, setValorPasado] = useState('');

    const [valorInicial, setValorInicial] = useState('0');
    const Parte: string[] = valorInicial.split(".");


    function crearNumero(valorActual: any, valor: String) {

        if (valorActual === '0') {
            valorActual = ''
        }

        setValorInicial(valorActual + valor);
    }


    function callApiResultado(numero1: number, numero2: number, operacion: number){
        axios
          .get('https://azteksoft.tech/operacion/'+numero1+'/'+numero2+'/'+operacion)
          .then(function (response) {
            // handle success
          //  alert(JSON.stringify(response.data)).
           setValorInicial((JSON.stringify(response.data)));
          }).catch(function (error) {
            // handle error
            alert(error.message);
          });
      }



    function operacion(tipoO: number, valor: any) {

        if (tipoO) {
            setTipo(tipoO);
            if (valor === '0') {
                setValorPasado('')
            } else {
                setValorPasado(valor)
            }
            setValorInicial('0');
        }
    }

    function entreCien() {

        setValorInicial(String(Number(valorInicial) / 100));
    }

    function Negativo() {
        if (negativo == 0) {
            setValorInicial('-' + valorInicial);
            setNegativo(1);
        } else {
            setNegativo(0);
            setValorInicial(valorInicial.replace(/^./, ""))
        }
    }

    function FinalizarOperacion() {

        switch (tipo) {
            case 1:
                // setValorInicial(String(Number(valorInicial) + Number(valorPasado)));
                break;
            case 2:
                // setValorInicial(String(Number(valorPasado) - Number(valorInicial)));
                break;
            case 3:
                // setValorInicial(String(Number(valorPasado) * Number(valorInicial)));
                break;
            case 4:
                // setValorInicial(String(Number(valorPasado) / Number(valorInicial)));
                break;
                
                return;

            default:
                break;
        }
        callApiResultado(Number(valorPasado), Number(valorInicial), Number(tipo));
        setTipo(0);
        setValorFinal('');
        setValorPasado('');
    }

    function limpiarTodo() {
        setTipo(0);
        setValorInicial('0');
        setValorPasado('');
    }

    return (

        <View style={[rss.container, rss.bgBlack]}>
            <View
                style={{
                    height: 70,
                    borderBottomColor: 'gray',
                    borderBottomWidth: 1,
                }}
            >
                <Text
                    style={[rss.textGray, rss.font3, { position: 'absolute', bottom: 15, right: 34, paddingLeft: 34 }]}
                >

                    {valorPasado}

                </Text>
            </View>
            <View
                style={{ height: 230, }}
            >
                <Text
                    style={[rss.font6, rss.textC, rss.textWhite, { position: 'absolute', bottom: 15, right: 34, paddingLeft: 34, fontWeight: '100', }]}
                >
                    {Parte[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    {Parte[1] ? '.' + Parte[1] : ''}




                </Text>
            </View>
            <View style={{

                flexDirection: "row",
            }}>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        alignItems: 'center',
                    }}
                    onPress={() => limpiarTodo()}
                >
                    <View style={[rss.operatorBtU, rss.margin1]}>
                        <Text style={[rss.BText, rss.font3, rss.textBlack]}>AC</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        flex: 1,
                    }}
                    onPress={() => Negativo()}
                >
                    <View style={[rss.operatorBtU, rss.margin1]}>
                        <Text style={[rss.BText, rss.textBlack]}>±</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        flex: 1,
                    }}
                    onPress={() => entreCien()}
                >
                    <View style={[rss.operatorBtU, rss.margin1]}>
                        <Text style={[rss.BText, rss.textBlack]}>%</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        flex: 1,
                    }}
                    onPress={() => operacion(4, valorInicial)}
                >
                    <View style={[rss.operatorBtn, rss.margin1]}>
                        <Text style={[rss.BText]}>÷</Text>
                    </View>
                </TouchableOpacity>

            </View>
            <View style={{

                flexDirection: "row",
            }}>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        alignItems: 'center',
                    }}
                    onPress={() => crearNumero(valorInicial, '9')}
                >
                    <View style={[rss.numberBtn, rss.margin1]}>
                        <Text style={rss.BText}>9</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        flex: 1,
                    }}
                    onPress={() => crearNumero(valorInicial, '8')}
                >
                    <View style={[rss.numberBtn, rss.margin1]}>
                        <Text style={rss.BText}>8</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        flex: 1,
                    }}
                    onPress={() => crearNumero(valorInicial, '7')}
                >
                    <View style={[rss.numberBtn, rss.margin1]}>
                        <Text style={rss.BText}>7</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        flex: 1,
                    }}
                    onPress={() => operacion(3, valorInicial)}
                >
                    <View style={[rss.operatorBtn, rss.margin1]}>
                        <Text style={[rss.BText]}>×</Text>
                    </View>
                </TouchableOpacity>

            </View>
            <View style={{

                flexDirection: "row",
            }}>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        alignItems: 'center',
                    }}
                    onPress={() => crearNumero(valorInicial, '6')}
                >
                    <View style={[rss.numberBtn, rss.margin1]}>
                        <Text style={rss.BText}>6</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        flex: 1,
                    }}
                    onPress={() => crearNumero(valorInicial, '5')}
                >
                    <View style={[rss.numberBtn, rss.margin1]}>
                        <Text style={rss.BText}>5</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        flex: 1,
                    }}
                    onPress={() => crearNumero(valorInicial, '4')}
                >
                    <View style={[rss.numberBtn, rss.margin1]}>
                        <Text style={rss.BText}>4</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        flex: 1,
                    }}
                    onPress={() => operacion(2, valorInicial)}
                >
                    <View style={[rss.operatorBtn, rss.margin1]}>
                        <Text style={[rss.BText]}>-</Text>
                    </View>
                </TouchableOpacity>

            </View>
            <View style={{

                flexDirection: "row",
            }}>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        alignItems: 'center',
                    }}
                    onPress={() => crearNumero(valorInicial, '3')}
                >
                    <View style={[rss.numberBtn, rss.margin1]}>
                        <Text style={rss.BText}>3</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        flex: 1,
                    }}
                    onPress={() => crearNumero(valorInicial, '2')}
                >
                    <View style={[rss.numberBtn, rss.margin1]}>
                        <Text style={rss.BText}>2</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        flex: 1,
                    }}
                    onPress={() => crearNumero(valorInicial, '1')}
                >
                    <View style={[rss.numberBtn, rss.margin1]}>
                        <Text style={rss.BText}>1</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        flex: 1,
                    }}
                    onPress={() => operacion(1, valorInicial)}

                >
                    <View style={[rss.operatorBtn, rss.margin1]}>
                        <Text style={[rss.BText]}>+</Text>
                    </View>
                </TouchableOpacity>

            </View>

            <View style={{

                flexDirection: "row",
            }}>
                <TouchableOpacity
                    style={{
                        flex: 2,
                        alignItems: 'center',
                    }}
                    onPress={() => crearNumero(valorInicial, '0')}
                >
                    <View style={[rss.numberBtnX, rss.margin1]}>
                        <Text style={[rss.OText, rss.textL]}>0</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        flex: 1,
                    }}
                    onPress={() => crearNumero(valorInicial, '.')}
                >
                    <View style={[rss.numberBtn, rss.margin1]}>
                        <Text style={[rss.BText]}>.</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        flex: 1,
                    }}
                    onPress={() => FinalizarOperacion()}
                >
                    <View style={[rss.operatorBtn, rss.margin1]}>
                        <Text style={[rss.BText]}>=</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>

    )
}