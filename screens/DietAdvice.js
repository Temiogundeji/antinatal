import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, Layout, Input, Select, SelectItem , Button} from '@ui-kitten/components';
import { ScrollView } from 'react-native-gesture-handler';


const DietAdvice = ({navigation}) => {
    return(
        <Layout style={styles.container}>
            <Layout style={styles.fieldContainer}>
                <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 30}}>Nutritional Advice for Pregnant Women</Text>
                <ScrollView>
                    <View>
                        <Text style={{ fontSize: 16}}>It’s always important to eat a balanced diet — and it’s even more important when you’re pregnant because what you eat is the main source of nutrients for your baby. However, many women don’t get enough iron, folate, calcium, vitamin D, or protein. So when you are pregnant, it is important for you to increase the amounts of foods you eat with these nutrients.
                            Most women can meet their increased needs with a healthy diet that includes plenty of fruits, vegetables, whole grains, and proteins. According to the American College of Obstetricians and Gynecologists (ACOG), you should try to eat a variety of foods from these basic food groups. If you do, you are likely to get all the nutrients you need for a healthy pregnancy.
                        </Text>
                    </View>
                    <View>
                        <Text style={{marginTop: 30, fontSize: 18, fontWeight: 'bold'}}>Key Nutrients you need.</Text>
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 18}}>Calcium</Text>
                                <Text style={{ fontSize: 16}}>Helps to build strong bones and teeth. Main sources include milk, cheese, yogurt, and sardines. During pregnancy you need 1,000 milligrams (mg) daily.</Text>

                                <Text style={{ fontWeight: 'bold', fontSize: 18}}>Iron</Text>
                                <Text style={{ fontSize: 16}}>Helps red blood cells deliver oxygen to your baby. Sources include lean red meat, dried beans, peas, and iron-fortified cereals. During pregnancy you need 27 mg daily.</Text>

                                <Text style={{ fontWeight: 'bold', fontSize: 18}}>Vitamin A</Text>
                                <Text style={{ fontSize: 16}}>You need this vitamin for healthy skin, eyesight, and bone growth. Carrots, dark, leafy greens, and sweet potatoes are good sources. During pregnancy you need 770 micrograms daily.</Text>

                                <Text style={{ fontWeight: 'bold', fontSize: 18}}>Vitamin C</Text>
                                <Text style={{ fontSize: 16}}>Promotes healthy gums, teeth, and bones, and helps your body absorb iron. Good sources include citrus fruit, broccoli, tomatoes, and strawberries. During pregnancy you need 85 mg daily.</Text>

                                <Text style={{ fontWeight: 'bold', fontSize: 18}}>Vitamin D </Text>
                                <Text style={{ fontSize: 16}}>Aids your body in the absorption of calcium to help build your baby’s bones and teeth. Sources include exposure to sunlight, fortified milk, and fatty fish, such as salmon. During pregnancy you need 600 international units (IUs) daily.</Text>

                                <Text style={{ fontWeight: 'bold', fontSize: 18}}>Vitamin B6</Text>
                                <Text style={{ fontSize: 16}}>Helps form red blood cells and helps your body use protein, fat, and carbohydrates. You can find vitamin B6 in beef, liver, pork, whole-grain cereals, and bananas. During pregnancy you need 1.9 mg daily.</Text>

                                <Text style={{ fontWeight: 'bold', fontSize: 18}}>Vitamin B12</Text>
                                <Text style={{ fontSize: 16}}>Helps form red blood cells and maintains your nervous system. You can find this vitamin only in animal products. Good sources include liver, meat, fish, poultry, and milk. During pregnancy you need 2.6 micrograms daily.</Text>

                                <Text style={{ fontWeight: 'bold', fontSize: 18}}>Folate (Folic Acid)</Text>
                                <Text style={{ fontSize: 16}}>A B vitamin important in the production of blood and protein, it also reduces the risk of neural tube defects (a birth defect of the brain and spinal cord). You can find folate in green, leafy vegetables, liver, orange juice, legumes (beans, peas, lentils), and nuts.</Text>

                                <Text style={{ fontSize: 16}}>You must get at least 400 micrograms of folate daily before pregnancy and during the first 12 weeks of pregnancy to reduce the risk of neural tube defects. During pregnancy, doctors recommend you get 600 micrograms daily.</Text>

                                <Text style={{ fontWeight: 'bold', fontSize: 18}}>Prenatal Vitamins</Text>
                                <Text style={{ fontSize: 16}}>Vitamin and mineral supplements cannot replace a healthy diet. Most doctors recommend that pregnant women take a prenatal vitamin and mineral supplement every day in addition to eating a healthy diet.</Text>

                                <Text style={{ fontSize: 16}}>Taking a supplement ensures that you and your baby get enough important nutrients like folic acid and iron. But don't overdo it — taking too much can be harmful for you and your baby.</Text>

                                <Text style={{ fontWeight: 'bold', fontSize: 18}}>Alcohol, Caffeine, and Fish</Text>
                                <Text style={{ fontSize: 16}}>Pregnant women and women who may become pregnant should not drink alcohol. Drinks containing alcohol include beer, wine, liquor, mixed drinks, and malt beverages.</Text>

                                <Text style={{ fontSize: 16}}>Even moderate drinking during pregnancy can cause behavioral or developmental problems for a baby. Heavy drinking during pregnancy can result in serious problems for the baby, including malformation and intellectual disability.</Text>
                                <Text style={{ fontSize: 16}}>While it’s unclear whether or not high caffeine intake leads to miscarriage, it appears moderate caffeine intake (about two 8-ounce cups of coffee) does not.</Text>

                                <Text style={{ fontSize: 16}}>Still, it’s probably a good idea to limit caffeine in your diet during your pregnancy. Too much caffeine can interfere with sleep, contribute to nausea, and lead to dehydration.</Text>
                                <Text style={{ fontSize: 16}}>Fish can be a great source of protein, omega-3 fatty acids, and other healthy nutrients. But pregnant women should take care to avoid certain kinds of fish because they contain high levels of mercury, which can harm a growing baby. Fish you should avoid include shark, swordfish, king mackerel, and tilefish.</Text>
                        </View>
                    </View>
                </ScrollView>
            </Layout>
        </Layout>
    );
}

export default DietAdvice;

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column'
    },
    fieldContainer: {
        padding: 20
    },
});
