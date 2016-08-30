public class StringArrayTest {

	public StringArrayTest() {

	}

	public static List<String> generateStringArray(Integer size) {

		List<String> data = new List<String>();

		for (Integer x = 0; x < size; x++) {
			data.add('Test ' + x);
		}
		return data;
	}
}
