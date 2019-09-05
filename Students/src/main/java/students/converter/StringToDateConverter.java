package students.converter;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.type.TypeFactory;
import com.fasterxml.jackson.databind.util.Converter;

public class StringToDateConverter implements Converter<String, Date> {

	SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy");

	@Override
	public Date convert(String str) {
		try {
			return format.parse(str);
		} catch (ParseException e) {
			return null;
		}
	}

	@Override
	public JavaType getInputType(TypeFactory typeFactory) {
		return typeFactory.constructType(String.class);
	}

	@Override
	public JavaType getOutputType(TypeFactory typeFactory) {
		return typeFactory.constructType(Date.class);
	}

}
